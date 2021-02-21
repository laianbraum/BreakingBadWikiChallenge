import Loader from "react-loader-spinner";
import { LoadingContainer } from "../../styles/Loading";

export default function Loading(){
  return (
    <LoadingContainer>
      <Loader
        type="BallTriangle"
        color="#026635"
        height={200}
        width={200}
      />
    </LoadingContainer>
  )
}