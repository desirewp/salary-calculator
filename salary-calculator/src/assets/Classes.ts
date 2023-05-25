export default class Project {
  constructor(
    public id: string,
    public status: string,
    public semester: string,
    public created: string
  ) {
    this.id = id;
    this.status = status;
    this.semester = semester;
    this.created = created;
  }
}

// Fake projects
export const projects: Project[] = [
  new Project("dbi41615156","done", "ht 2022", "2022-12-14"),
  new Project("ocnibciubigfd","in progress", "vt 2022", "2022-06-04"),
  new Project("djoocnoo4","waiting", "ht 2021", "2021-12-14"),
  new Project("iuvczbysclx","done", "vt 2021", "2021-06-14"),
];