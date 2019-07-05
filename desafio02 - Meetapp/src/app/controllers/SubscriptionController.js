import { Op } from 'sequelize';

import Meetup from '../models/Meetup';
import User from '../models/User';
import Subscription from '../models/Subscription';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              // Op.gt : greater than >
              [Op.gt]: new Date(),
            },
          },
          required: true,
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const { meetupId } = req.params;

    const user = await User.findByPk(req.userId);

    const meetup = await Meetup.findByPk(meetupId);

    // checa se o dono do meetup é quem está tentando se inscrever
    if (meetup.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: "You can't subscribe to your own meetup" });
    }

    // checa se o meetup já aconteceu
    if (meetup.past) {
      return res
        .status(400)
        .json({ error: "You can't subscribe to past meetups" });
    }

    // busca por meetups no mesmo horario que está tentando marcar
    const checkIfDateIsTaken = await Subscription.findOne({
      where: { user_id: user.id },
      include: [
        { model: Meetup, required: true, where: { date: meetup.date } },
      ],
    });

    // checa se o usuário já tem uma meetup marcada para esse horário
    if (checkIfDateIsTaken) {
      return res.status(400).json({
        error: 'You can not subscribe to two meetups at the same time',
      });
    }

    // cria a inscrição
    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: meetup.id,
    });

    return res.json(subscription);
  }
}

export default new SubscriptionController();
