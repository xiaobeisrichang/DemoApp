import HomeComponent from '../views/index/home';
import WalletComponent from '../views/wallet/wallet';
import MessageComponent from '../views/message/message';
import MyComponent from '../views/my/my';

export default Routes = [{
  message : '铂涛旅行',
  index : 0,
  component : HomeComponent
},
{
  message : '钱包',
  index : 1,
  component : WalletComponent
},
{
  message :'消息',
  index : 2,
  component :MessageComponent
},
{
  message : '我的',
  index : 3,
  component :MyComponent
}
]
