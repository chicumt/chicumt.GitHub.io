---
icon: pen-to-square
date: 2024-2-9
category:
  - 人工智能
tag:
  - chatglm
  - langchain
---

## 1.langchain+chatglm工作原理

**langchain 将本地文档 embedding后形成store_vector,将用户提问的query_vector与之匹配，最后将信息整合传递给大模型(chatglm)**

![image-20240209112038640](https://raw.githubusercontent.com/chicumt/image/main/blog-images/image-20240209112038640.png)