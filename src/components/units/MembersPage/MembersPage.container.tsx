import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { IQuery, IQueryFetchFollowingArgs, IQueryFetchUserArgs } from "../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../MyPageA/MyPageA";
import { FETCH_FOLLOWING } from "../PhotoReview/ReviewList/Review.query";
import { FETCH_USERS } from "./MebersPage.query";
import MembersUi from "./MembersPage.presenter";

export default function Members() {
  const [isNo, setIsNo] = useState(false);
  const [Lo, setLo] = useState("")
  const [age, setAge] = useState("")
  const [level, setLevel] = useState("")
  const [fav, setFav] = useState("")
  const [Lo_R, setLo_R] = useState("")
  const [age_R, setAge_R] = useState("")
  const [level_R, setLevel_R] = useState("")
  const [fav_R, setFav_R] = useState("")
  const result = []
  const following =[]


  const { data } = useQuery<
    Pick<IQuery, "fetchUsers">,
    IQueryFetchUserArgs
  >(FETCH_USERS);

  const { data: LoggedIn} =
  useQuery(FETCH_USER_LOGGED_IN);

  const { data:followingList ,fetchMore: followingMore } = useQuery<
  Pick<IQuery, "fetchFollowing">,
  IQueryFetchFollowingArgs
>(FETCH_FOLLOWING, {
    variables: { userId: String(LoggedIn?.fetchUserLoggedIn.id) },
  });


  const onChangeLevel = (e) => {
    setLevel(e)
  }
  const onChangeLo = (e) => {
    setLo(e)
  }
  const onChangeAge = (e) => {
    setAge(e)
  }
  const onChangeFav = (e) => {
    setFav(e)
  }
  const onClickBtn = () => {
    setLo_R(Lo)
    setAge_R(age)
    setLevel_R(level)
    setFav_R(fav)
    if(result.length === 0 && setIsNo) {
      setIsNo(prev => !prev)
    }
}
  data?.fetchUsers.forEach((el)=> {
    if(el.region?.includes(Lo) === true &&
      el.age?.includes(age) === true &&
      el.grade?.includes(level) === true &&
      el.prefer?.includes(fav) === true
      ) {
          result.push(el) 
      }
      
  })
  useEffect(() =>{
    if(result.length === 0
      ) {
         setIsNo(true)
         return
      }else{
        setIsNo(false)
      }
  },[result])
  useEffect(() =>{
    result.forEach((el) =>{
      followingList?.fetchFollowing.forEach((el_F) =>{
        if(el.id === el_F.user2.id){
          following.push(el.id)
        }
      })
    })
  },[result])

  
 
  return <MembersUi 
  following={following}
  isNo={isNo} 
  data={data}
  result={result}
  onChangeLevel={onChangeLevel}
  onChangeLo={onChangeLo}
  onChangeAge={onChangeAge}
  onChangeFav={onChangeFav}
  onClickBtn={onClickBtn}
  />;
}
