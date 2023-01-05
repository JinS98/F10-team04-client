import UserCard from "../../commons/userCard/01-userCard";
import * as S from "./MyPage.styles";
import { BiUserPlus } from "react-icons/bi";
import { FaRegHeart } from "react-icons/bi";
import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
// const aaa = [
//   {
//     nickName: "asd",
//     age: "10대",
//     region: "서울",
//   },
// ];

export default function MyPageA(props) {
  const [color1, setColor1] = useState(true);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color4, setColor4] = useState(false);

  const onClickColorfirst = (e) => {
    if (!color1) {
      if (color2) {
        setColor1((prev) => !prev);
        setColor2((prev) => !prev);
      } else if (color3) {
        setColor1((prev) => !prev);
        setColor3((prev) => !prev);
      } else if (color4) {
        setColor1((prev) => !prev);
        setColor4((prev) => !prev);
      } else {
        setColor1((prev) => !prev);
      }
    }
  };

  const onClickColorSecond = (e) => {
    if (!color2) {
      if (color1) {
        setColor1((prev) => !prev);
        setColor2((prev) => !prev);
      } else if (color3) {
        setColor2((prev) => !prev);
        setColor3((prev) => !prev);
      } else if (color4) {
        setColor2((prev) => !prev);
        setColor4((prev) => !prev);
      } else {
        setColor2((prev) => !prev);
      }
    }
  };

  const onClickColorThird = (e) => {
    if (!color3) {
      if (color1) {
        setColor1((prev) => !prev);
        setColor3((prev) => !prev);
      } else if (color2) {
        setColor2((prev) => !prev);
        setColor3((prev) => !prev);
      } else if (color4) {
        setColor3((prev) => !prev);
        setColor4((prev) => !prev);
      } else {
        setColor3((prev) => !prev);
      }
    }
  };

  const onClickColorFourth = (e) => {
    if (!color4) {
      if (color1) {
        setColor1((prev) => !prev);
        setColor4((prev) => !prev);
      } else if (color2) {
        setColor2((prev) => !prev);
        setColor4((prev) => !prev);
      } else if (color3) {
        setColor3((prev) => !prev);
        setColor4((prev) => !prev);
      } else {
        setColor4((prev) => !prev);
      }
    }
  };

  return (
    <S.Containerbox>
      {/* <S.MyPageImageBox>
          <S.MyPageImage src="/mypage.png" />
        </S.MyPageImageBox> */}
      <S.Container>
        <S.Wrapper>
          <S.ProfileBox>
            <S.ProfileImageAvatarBox>
              <S.ImageAvatar src="/profile.png" />
            </S.ProfileImageAvatarBox>
            <S.InfoBox>
              <S.NickInfoBox>
                <S.Nickname>춘식이님</S.Nickname>
                <S.Nim>님</S.Nim>
                <S.Modify>회원정보수정</S.Modify>
              </S.NickInfoBox>
              <S.InformationBox>
                <S.FriendHeartBox>
                  <S.FriendBox>
                    <S.IconBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.IconBox>
                    <S.FriendTextBox>
                      <S.FriendText>팔로잉 200</S.FriendText>
                    </S.FriendTextBox>
                  </S.FriendBox>
                  <S.HeartBox1>
                    <S.RightIconDownBox>
                      <BiUserPlus style={{ fontSize: "40px" }} />
                    </S.RightIconDownBox>
                    <S.FameTextBox>
                      <S.FameText>팔로우 200</S.FameText>
                    </S.FameTextBox>
                  </S.HeartBox1>
                </S.FriendHeartBox>
              </S.InformationBox>
            </S.InfoBox>
          </S.ProfileBox>
        </S.Wrapper>
        <S.BoardCategoryWrapper>
          <S.BoardBox>
            <S.FriendListBox>
              <S.FriendList>
                <S.FriendListText isActive={color1} onClick={onClickColorfirst}>
                  내가 쓴 글
                </S.FriendListText>
              </S.FriendList>
            </S.FriendListBox>
            <S.ChatListBox>
              <S.ChatList>
                <S.ChatListText onClick={onClickColorSecond} isActive={color2}>
                  내가 참가한 글
                </S.ChatListText>
              </S.ChatList>
            </S.ChatListBox>
            <S.PickListBox>
              <S.PickList>
                <S.PickListText onClick={onClickColorThird} isActive={color3}>
                  내가 찜한 글
                </S.PickListText>
              </S.PickList>
            </S.PickListBox>
            <S.PickListBox>
              <S.PickList>
                <S.JoinCrewText onClick={onClickColorFourth} isActive={color4}>
                  참가인원
                </S.JoinCrewText>
              </S.PickList>
            </S.PickListBox>
          </S.BoardBox>
        </S.BoardCategoryWrapper>
        <S.ListContainer>
          {color1 ? (
            <S.BoardListWrapper>
              <S.BoardList>
                <S.InfoTextWrapper>
                  <S.InfoTextBox>
                    <S.Title>
                      끝날때까지 끝난게 아니라 생각합니다....열심히해볼게요
                    </S.Title>
                  </S.InfoTextBox>
                  <S.Content>
                    <S.ContentText>
                      호호호호호호호호호호호호호 마 남자아이가
                    </S.ContentText>
                  </S.Content>
                </S.InfoTextWrapper>
                <S.ThumbnailBox>
                  <S.ThumbnailImage src="/thumbnailsample.png" />
                </S.ThumbnailBox>
              </S.BoardList>
            </S.BoardListWrapper>
          ) : (
            ""
          )}
          {color2 ? (
            <S.BoardListWrapper>
              <S.BoardList>
                <S.ImageListProfileBox>
                  <S.ImageListProfile src="/profile.png" />
                </S.ImageListProfileBox>
                <S.InfoTextWrapper>
                  <S.InfoTextBox>
                    <S.Title>
                      오늘 잠수교쪽에서 300찍을꺼니까 진짜 준비된 사람만 나오기
                    </S.Title>
                    <S.MeetTime>시간 12월 11일 15시</S.MeetTime>
                  </S.InfoTextBox>
                  <S.Content>
                    <S.ContentText>
                      아나 진짜 오늘 운동 박살한번 내버릴라니까 죽을 준비 된
                      분만 오쇼
                    </S.ContentText>
                    <S.ReviewBtn>리뷰쓰기</S.ReviewBtn>
                  </S.Content>
                </S.InfoTextWrapper>
                <S.ThumbnailBox>
                  <S.ThumbnailImage src="/thumbnailsample.png" />
                </S.ThumbnailBox>
              </S.BoardList>
            </S.BoardListWrapper>
          ) : (
            ""
          )}
          {color3 ? (
            <S.BoardListWrapper>
              <S.BoardList>
                <S.ImageListProfileBox>
                  <S.ImageListProfile src="/profile.png" />
                </S.ImageListProfileBox>
                <S.InfoTextWrapper>
                  <S.InfoTextBox>
                    <S.Title>
                      진짜 오늘 반포쪽에서 100킬로 이상끼리 모여서 한번
                      조져보고싶어요 나오기
                    </S.Title>
                    <S.MeetTime>시간 12월 11일 15시</S.MeetTime>
                  </S.InfoTextBox>
                  <S.Content>
                    <S.ContentText>
                      진짜 한번만 세자리수 밑으로 가보고 싶으신 분들만...
                    </S.ContentText>
                    <S.ReviewBtn>참가취소</S.ReviewBtn>
                  </S.Content>
                </S.InfoTextWrapper>
                <S.ThumbnailBox>
                  <S.ThumbnailImage src="/thumbnailsample.png" />
                </S.ThumbnailBox>
              </S.BoardList>
            </S.BoardListWrapper>
          ) : (
            ""
          )}
          {color4 ? (
            <S.BoardListWrapper>
              <S.BoardList>
                <S.ImageListProfileBox>
                  <S.ImageListProfile src="/profile.png" />
                </S.ImageListProfileBox>
                <S.InfoTextWrapper>
                  <S.InfoTextBox1>
                    <S.Title>치타뭐여이거</S.Title>
                    <S.Nim1>님</S.Nim1>
                  </S.InfoTextBox1>
                  <S.Content1>
                    <S.ContentText>최애운동</S.ContentText>
                    <S.Section1>지역</S.Section1>
                    <S.Sex>성별</S.Sex>
                  </S.Content1>
                </S.InfoTextWrapper>
                <S.ThumbnailBox>
                  <S.ThumbnailImage src="/thumbnailsample.png" />
                </S.ThumbnailBox>
              </S.BoardList>
            </S.BoardListWrapper>
          ) : (
            ""
          )}
        </S.ListContainer>
        {/* 보드리스트 게시글목록 할 때 부분 */}
      </S.Container>
    </S.Containerbox>
  );
}
