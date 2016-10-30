import { Injectable } from '@angurlar/core';
import { http } from '@angurlar/http';

@Injectable()

export class Bagel
{
    public pris: number;
    public bagelName: string;
}