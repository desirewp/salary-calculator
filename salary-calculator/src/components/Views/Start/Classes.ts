export default class Project {
  constructor(
    public status: string,
    public semester: string,
    public created: string
  ) {
    this.status = status;
    this.semester = semester;
    this.created = created;
  }
}
