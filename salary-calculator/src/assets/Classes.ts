export default class Project {
  constructor(
    public id: string,
    public status: string,
    public year: number,
    public semester: string,
    public created: string
  ) {
    this.id = id;
    this.status = status;
    this.year = year;
    this.semester = semester;
    this.created = created;
  }
}

export class Event{
  constructor(public id: string, public eventName: string, public lessons: number, public lessonLength: number, public price: number, public instructors: string[]){
    this.id = id;
    this.eventName = eventName;
    this.lessons = lessons;
    this.lessonLength = lessonLength;
    this.price = price;
    this.instructors = instructors;
  }
}

export class Instructor {
  constructor( public id: string, public fName: string, public lName: string, public email : string){
    this.id = id;
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    }
}

// Fake projects
export const projects: Project[] = [
  new Project("dbi41615156","done", 2022, "ht",  "2022-12-14"),
  new Project("ocnibciubigfd","in progress", 2022, "vt",  "2022-06-04"),
  new Project("djoocnoo4","waiting", 2021, "ht", "2021-12-14"),
  new Project("iuvczbysclx","done", 2021,  "vt", "2021-06-14"),
];

// Fake courses/events
export const eventsVT22 : Event[] = [
 new Event('afaffafgfm', 'Bachata nybörjare', 10, 2, 1600, ['abcd55izicbi', 'abcdvvvizicbi'])
]

export const instructors2023 : Instructor[] = [
  new Instructor('abcdizicbi', 'Björn', 'Löfstrand', 'bjorn@dansarna.se'),
  new Instructor('abcdiscvzicbi', 'Caroline', 'Eng','caroline@dansarna.se'),
  new Instructor('abcdimnzicbi', 'Desirée', 'Persson', 'desiree@dansarna.se'),
  new Instructor('abcdimnzmmi', 'Emma', 'Lundqvist', 'emma@dansarna.se'),
  new Instructor('abcd443izicbi', 'Hanna', 'Kannerstål', 'hanna@dansarna.se'),
  new Instructor('abcdkguizicbi', 'Hugo', 'Sandberg', 'hugo@dansarna.se'),
  new Instructor('abcdigdzicbi', 'Ingrid', 'Södersten', 'bjorn@dansarna.se'),
  new Instructor('abcdiztm,icbi', 'Isabelle', 'Almskoug', 'isabelle@dansarna.se'),
  new Instructor('abcdasaizicbi', 'Isabelle', 'Möller', 'ella@dansarna.se'),
  new Instructor('abcdizicökbi', 'Jakob', 'Bjerkemo', 'jakob@dansarna.se'),
  new Instructor('abcadaizicbi', 'Jamie', 'Senewiratne', 'jamie@dansarna.se'),
  new Instructor('abcdizllicbi', 'Kristina', 'Ferm', 'kristina@dansarna.se'),
  new Instructor('abcdisddzicbi', 'Lisa', 'Eklöf', 'lisa@dansarna.se'),
  new Instructor('abcdvvvizicbi', 'Marcus', 'Andersson', 'marcus@dansarna.se'),
  new Instructor('abcdlllizicbi', 'Marlene', 'Wennegren', 'marlene@dansarna.se'),
  new Instructor('abcdizicmmmbi', 'Patrik', 'Szigeti', 'patrik@dansarna.se'),
  new Instructor('abcdizzzzicbi', 'Raha', 'Omrani', 'raha@dansarna.se'),
  new Instructor('abcdi344zicbi', 'Sandra', 'Boda', 'sandra@dansarna.se'),
  new Instructor('abcd55izicbi', 'Svetlana', 'Löfstrand', 'lana@dansarna.se'),
]

