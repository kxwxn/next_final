"use client";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./ArchivingForm.module.css";
import { useRouter } from "next/navigation";

const ArchivingForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("Thoughts...");
  const [error, setError] = useState("");
  const navigate = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("clicked");
    if (!title || !content) {
      setError("Please your use your brain and write yer thoughts down....");
      return;
    }

    try {
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.title}
          value={title}
          placeholder="Title..."
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />
        <MDEditor
          value={content}
          onChange={(value) => {
            setContent(value || "");
            console.log(value);
          }}
        />
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.buttonsContianer}>
          <button type="button">Cancel</button>
          <button type="button">Save</button>
          <button type="submit">Archive</button>
        </div>
      </form>
    </div>
  );
};

export default ArchivingForm;

// brain 블로그에 글을 쓰는 페이지.
// 1. 사용자의 입력을 받아서 db에 post 한다.
// 2. Markdown 형식의 에디터를 사용해서 입력을 받는다.
// 3. MongoDB 연결
// 4. next fetch 를 이용하여 MongoDB에 post
// 5. post 후에 /brain 경로로 리다이렉트
