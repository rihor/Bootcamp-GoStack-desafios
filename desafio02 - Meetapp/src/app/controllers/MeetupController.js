import * as Yup from 'yup';
import { parseISO, isBefore } from 'date-fns';

import Meetup from '../models/Meetup';

class MeetupController {
  async index(req, res) {
    return res.json();
  }

  async store(req, res) {
    // schema de validação
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      banner_id: Yup.number().required(),
    });

    // checa se a requisição passa pela schema de validação
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // checa se a data informada já passou
    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Meetup date invalid' });
    }

    const user_id = req.userId;

    // cadastra o meetup no banco
    const meetup = await Meetup.create({ ...req.body, user_id });

    return res.json(meetup);
  }
}

export default new MeetupController();
