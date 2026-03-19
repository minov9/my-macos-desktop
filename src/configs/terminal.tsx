import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              你好！我是 Mino，一名多端全栈开发者。
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Web 开发 / React / TypeScript / 开源项目"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "我对有趣的项目和合作机会保持开放，欢迎随时联系！"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              邮箱:{" "}
              <a
                className="text-blue-300"
                href="mailto:qiuzhi814@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                qiuzhi814@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/minov9"
                target="_blank"
                rel="noreferrer"
              >
                @minov9
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">coding</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">skills</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
