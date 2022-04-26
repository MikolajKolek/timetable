import { VLoSubstitution } from 'src/api/v-lo';

export interface TableHour {
  begin: string;
  end: string;
  display: string;
}

export interface TableLesson {
  subject: string,
  subjectShort: string,
  teacher: string | undefined,
  room: string | undefined,
  group: string | undefined,
  color: string | undefined,
}

export interface TableLessonMoment {
  umid: string;
  lessons: TableLesson[];
}

export interface TableData {
  hours: TableHour[];
  lessons: TableLessonMoment[][];
  className: string;
  headers: {
    date: Date;
    substitutions: VLoSubstitution[];
  }[] | null;
}

// Universal moment id
export const toUmid = (
  baseUrl: string | undefined,
  classValue: string,
  day: number,
  hour: number,
): string => `${
  baseUrl === undefined ? 'v-lo' : encodeURIComponent(baseUrl)
}|${encodeURIComponent(classValue)}|${day.toString()}|${hour.toString()}`;
