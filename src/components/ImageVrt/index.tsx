import React from 'react';
import styled from 'styled-components';

type Props = {
    img_path: string;
}
const ImageVrt : React.FC<Props> = ({ img_path }) =>  {
  return (
    <Image style = {{
        background: `url(${img_path})`
    }}>
    </Image>
  );
};

const Image = styled.div `
    width: 426.5px;
    height: 738.44px;
`;

export default ImageVrt;