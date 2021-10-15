import react from 'react';
import styled from 'styled-components/native';
import lista from './src/lista';

const Page = styled.SafeAreaView`
  flex:1;
`;

const Item = styled.TouchableOpacity`
  padding: 10px;
  background-color: #CCC;
  flex-direction: row;
`;

const ItemText = styled.Text`
  font-size: 15px;
  flex: 1;
`;

const Scroll = styled.ScrollView`

`;

const ItemCheck = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #00F;
`;

export default () => {
  return (
    <Page>
      <Scroll>
        {lista.map((item, index) => {
          return (
            <Item key = {index} onPress={()=>{}} >
              <>
                <ItemText>{item.task}</ItemText>
                <ItemCheck></ItemCheck>
              </>
            </Item>
          );
        })}
      </Scroll>
    </Page>
  )