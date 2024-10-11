import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
        <div className="image">Aucune image</div>
        <div className="input">
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
        <button className="add-btn"></button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: 2px solid black;

  display: grid;
  grid-template-columns: 215px 645px;
  grid-template-rows: repeat(2, 121px);
  grid-column-gap: 20px;

  margin-top: 31px;
  margin-left: 71px;

 .image{
    border: 1px solid red;
 }
 .input{
    border: 1px solid blue;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 35px;
    grid-row-gap: 13px;
 }
 .add-btn{
    height: 34px;
    margin-left: 235px;
    margin-top: 8px;
 }
`;
