//리뷰 작성 페이지
import ReviewForm from "@/components/component/ReviewForm";

interface reviewType {
  title: string;
  id: number;
  review: string;
  date: string;
}

const NewReviewForm: React.FC = () => {

  //데이터를 저장하는 코드 최근 chat gpt를 활용하여 타입을 재지정 해야함. void형식의 타입이라 이것의 타입을 지정 해 줘야 할 듯
  async function addReview(enteredReview: reviewType) {
    const response = await fetch("api/review", {
      method: "POST",
      body: JSON.stringify(enteredReview),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
  }

  return <ReviewForm addReview={addReview} />;
};

export default NewReviewForm;
