// 例: src/lib/db.ts
export async function addComment(text: string) {
  // たとえば Prisma や直接クエリでデータベースに書き込む処理
  // await prisma.comment.create({ data: { text } });
  console.log('saved comment:', text);
}
