import React from "react";
import { BookContainer } from "./Book.styles";
import Page from "./page/page";

const pageContent = [
  {
    title: "Page 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus necessitatibus sed non distinctio accusamus, iste facilis dolores reiciendis quia, ut sit qui commodi excepturi. Magnam doloribus voluptatibus quia dicta?",
  },
  {
    title: "Page 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus necessitatibus sed non distinctio accusamus, iste facilis dolores reiciendis quia, ut sit qui commodi excepturi. Magnam doloribus voluptatibus quia dicta?",
  },
  {
    title: "Page 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus necessitatibus sed non distinctio accusamus, iste facilis dolores reiciendis quia, ut sit qui commodi excepturi. Magnam doloribus voluptatibus quia dicta?",
  },
  {
    title: "Page 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus necessitatibus sed non distinctio accusamus, iste facilis dolores reiciendis quia, ut sit qui commodi excepturi. Magnam doloribus voluptatibus quia dicta?",
  },
  {
    title: "Page 5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus necessitatibus sed non distinctio accusamus, iste facilis dolores reiciendis quia, ut sit qui commodi excepturi. Magnam doloribus voluptatibus quia dicta?",
  },
  {
    title: "Page 6",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus necessitatibus sed non distinctio accusamus, iste facilis dolores reiciendis quia, ut sit qui commodi excepturi. Magnam doloribus voluptatibus quia dicta?",
  },
  {
    title: "Page 7",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus necessitatibus sed non distinctio accusamus, iste facilis dolores reiciendis quia, ut sit qui commodi excepturi. Magnam doloribus voluptatibus quia dicta?",
  },
];
function Book() {
  return (
    <BookContainer $pages={pageContent.length}>
      <div className="book">
        {pageContent.map(({ title }, i) => {
          if (i <= (pageContent.length - 1) / 2)
            return (
              <input id={`${i + 1}`} name="trigger" type="radio" key={i}/>
            );
        })}
        {pageContent.map((content, i) => (
          <Page
            key={i}
            pageNum={i + 1}
            content={content}
            pages={pageContent.length}
          />
        ))}
      </div>
    </BookContainer>
  );
}

export default Book;
