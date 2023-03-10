import { useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Todo() {
  const [todo, setTodo] = useState<string[]>([
    "不動産案件の学生を集める",
    "研究する",
    "Githubにアップする",
  ]);
  const [inputItem, setInputItem] = useState<string>("");

  const finishedItem = (item: string) => {
    const newTodo = todo.filter((todo) => todo !== item);
    setTodo(newTodo);
  };

  const insertItem = () => {
    if (inputItem === "") return;
    const newTodo = todo.concat(inputItem);
    setTodo(newTodo);
    setInputItem("");
  };

  return (
    <>
      <Head>
        <title>test site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>TODO リスト</h1>

        <div>
          <input
            type="text"
            placeholder="ToDoを追加"
            onChange={(event) => setInputItem(event.target.value)}
            value={inputItem}
          />
          <button onClick={() => insertItem()}>Add</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>TODO</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item) => {
              return (
                <tr key={item}>
                  <td>{item}</td>
                  <td>
                    <button onClick={() => finishedItem(item)}>完了</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
