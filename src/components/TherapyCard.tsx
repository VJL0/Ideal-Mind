import styled from "styled-components";

const Style = styled.div`
  margin: 1.5rem 0;
  width: 50%;

  .card-border {
    width: 100% !important;
    min-height: 370px;
    background: #fff;
    box-shadow: 2px 4px 12px #00000014;
    border: 1px solid #0000001f;
    border-radius: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    flex: 1 1 auto;
    box-sizing: border-box;
  }

  img {
    object-fit: cover;
    width: 3rem;
  }
`;

interface CardProps {
  imageUrl?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description }) => {
  return (
    <Style>
      <div className="card-border">
        <div className="card-body">
          <img src={imageUrl} />
          <h4 className="card-title">{title}</h4>
          <p className="card-test">{description}</p>
        </div>
      </div>
    </Style>
  );
};

export default Card;
