import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';

import Meetup from '../models/Meetup';
import User from '../models/User';

class MeetupController {
  async index(req, res) {
    return res.json();
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      banner_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { date } = req.body;

    if (isBefore(parseISO(date), new Date())) {
      return res.status(400).json({ error: 'Meetup date invalid' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.create({ ...req.body, user_id });
    return res.json(meetup);
  }

  async update(req, res) {
    // schema de validação
    const schema = Yup.object().shape({
      title: Yup.string(),
      file_id: Yup.number(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
    });

    // checagem pela schema
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // achar a meetup de acordo com o id passado nos parametros
    const meetup = await Meetup.findByPk(req.params.id);
    // checar esse é o dono da meetup
    if (meetup.user_id !== req.userId) {
      return res.status(401).json({ error: 'Not authorized.' });
    }

    // checa se o tempo limite já passou
    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(401).json({ error: 'Meetup date invalid.' });
    }

    // checa se a meetup já passou
    if (meetup.past) {
      return res.status(400).json({ error: 'Cannot update past meetups' });
    }

    await meetup.update(req.body);

    return res.json(meetup);
  }
}

export default new MeetupController();
