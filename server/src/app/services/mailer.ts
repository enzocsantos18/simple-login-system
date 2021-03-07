import nodemailer, { TransportOptions } from 'nodemailer';
import mailerConfig from '../config/mailerConfig';

const transport = nodemailer.createTransport(mailerConfig as TransportOptions);

export default transport;
