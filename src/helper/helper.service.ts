import * as moment from 'moment';
import * as randomstring from 'randomstring'

export function createHash() {
    return randomstring.generate(9);
}

export function getFirstMinuteDay(date: Date) {
    return moment(date).startOf('D').toDate();
}