import { Request, Response } from "express";
import shortId from 'shortid';
import { config } from "config/Constants";

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`

        response.json({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        const { hash } = req.params
        const url = {
            originURL: 'https://cloud.mongodb.com/v2/61d9c16fed9380077d2c7c08#clusters',
            hash: 'CUSD3DgEB',
            shorURL: 'http://localhost:5000/CUSD3DgEB'
        }
        response.redirect(url.originURL)
    }
}

