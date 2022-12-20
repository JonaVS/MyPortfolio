export type ResumeData = {
  resumes: { nodes: ResumeNode[] }
}

type ResumeNode = {
  url: string
}
