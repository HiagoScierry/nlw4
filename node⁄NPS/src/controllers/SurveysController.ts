import { Request, Response } from "express";
import { EntityRepository, getCustomRepository } from "typeorm";
import { Surveys } from "../models/surveys";
import { SurveysRepository } from "../repositories/surveysRepository";

@EntityRepository(Surveys)
class SurveysController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysController = getCustomRepository(SurveysRepository);

    const survey = surveysController.create({
      title,
      description,
    });

    await surveysController.save(survey);

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response) {
    const surveysController = getCustomRepository(SurveysRepository);
    const all = await surveysController.find();
    return response.json(all);

  }
}

export { SurveysController };
