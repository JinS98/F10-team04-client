import UserCard from "../../commons/userCard/01-userCard";
import * as S from "./MyPage.styles";
import { BiUserPlus } from "react-icons/bi";
import { FaRegHeart } from "react-icons/bi";
import { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import AttendList from "./AttendList";
import MyPickList from "./MyPickList";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      id
      email
      nickname
      grade
    }
  }
`;

export default function MyPageA(props) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);
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
                <S.Nickname>{data?.fetchUserLoggedIn?.nickname}</S.Nickname>
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
                  <S.InfoText>
                    <S.InfoTextBox>
                      <S.Title>
                        끝날때까지 끝난게 아니라 생각합니다 열심히해볼게요
                        호호호호호호호호호ㅗ호호호호호호호호호ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ
                      </S.Title>
                    </S.InfoTextBox>
                    <S.Content>
                      <S.ContentText>
                        호호호호호호호호호호호호호 마
                        남자아이가testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                      </S.ContentText>
                    </S.Content>
                  </S.InfoText>
                  <S.ThumbnailBox>
                    <S.ThumbnailImage src="/thumbnailsample.png" />
                  </S.ThumbnailBox>
                </S.InfoTextWrapper>
              </S.BoardList>
            </S.BoardListWrapper>
          ) : (
            ""
          )}
          {color2 ? <AttendList /> : ""}
          {color3 ? <MyPickList /> : ""}
          {color4 ? (
            // 참가인원 부분
            <S.BoardListWrapper>
              <S.BoardList>
                <S.ImageListProfileBox>
                  <S.ImageListProfile src="/profile.png" />
                </S.ImageListProfileBox>
                <S.Profile1>
                  <S.InfoTextBox1>
                    <S.Title1>치타뭐여이거</S.Title1>
                    <S.Nim1>님</S.Nim1>
                  </S.InfoTextBox1>
                  <S.Content1>
                    <S.Exercise>수영</S.Exercise>
                    <S.Section2>세종특별자치시</S.Section2>
                    <S.Sex1>남성</S.Sex1>
                  </S.Content1>
                </S.Profile1>
                {/* <S.ThumbnailBox>
                  <S.ThumbnailImage src="/thumbnailsample.png" />
                </S.ThumbnailBox> */}
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
