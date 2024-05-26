//리뷰 작성 폼 

import {  useRef } from "react";

interface review{
  addReview: any;
}


const ReviewForm: React.FC<review> = ({addReview}) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const detailInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: any) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current!.value;
    const enteredDetail = detailInputRef.current!.value;
    const enteredImage = imageInputRef.current!.value;

    const reviewData = {
      title: enteredTitle,
      detail: enteredDetail,
      image: enteredImage,
    };
    addReview(reviewData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">제목</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div>
        <label htmlFor="title">별점</label>
        <input type="text" required id="title" />
      </div>
      <div>
        <label htmlFor="title">아이디 </label>
        <input type="text" required id="title" />
      </div>
      <div>
        <label htmlFor="title">리뷰</label>
        <input type="text" required id="title" ref={detailInputRef} />
      </div>
    </form>
  );
};

export default ReviewForm;
