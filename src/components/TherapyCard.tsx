import styled from "styled-components";

const Style = styled.div`
  flex: 0 0 50%;
  padding: 20px;
  border-radius: 8px;
  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
  
  .card-border {
    width: 100% !important;
    min-height: 370px;
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
