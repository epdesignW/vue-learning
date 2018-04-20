<template>
    <div class="pos">
        <el-row>
            <el-col :span="7">
                <div id="orderLan">
                    <div class="orderItem">
                        <el-tabs>
                            <el-tab-pane label="点餐">
                                <el-table :data="tableData" border style="width:100%">
                                    <el-table-column prop="goodsName" label="商品"></el-table-column>
                                    <el-table-column prop="count" label="量" width="50"></el-table-column>
                                    <el-table-column prop="price" label="金额" width="70"></el-table-column>
                                    <el-table-column label="操作" fixed="right">
                                        <template scope="scope">
                                            <el-button type="text" size="small" @click="reduceOrderList(scope.row)">删除</el-button>
                                            <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                        </template>
                                    </el-table-column>

                                </el-table>
                                <div class="summary">
                                    总量：<span class="all-num">{{allCount}}</span> 
                                    总价：<span>{{allMoney}}</span>
                                </div>
                                <!-- 操作 -->
                                <el-button type="success" @click="getAllMoney()" >结账</el-button>
                                <el-button type="warning" >挂单</el-button>
                                <el-button type="danger" @click="delAllGoods()">删除</el-button>
                            </el-tab-pane>
                            <el-tab-pane label="挂单">挂单</el-tab-pane>
                            <el-tab-pane label="外卖">外卖</el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </el-col>
            <el-col :span="17">
                <div id="goodsItem">
                    <div class="goods">
                        <div class="hotGoods">
                            <h2>热销商品</h2>
                            <ul>
                                <li v-for="(good,index) in hotGoodA" @click="addOrderList(good)"><span>{{good.goodsName}}</span><span class="g-price">￥{{good.price}}</span></li>
                            </ul>
                        </div>
                        <div class="products-all">
                            <h2>产品中心</h2>
                            <ul>
                                <!-- <li v-for="goodA in goodsAll"> -->
                                <li v-for="goodA in goodsAllD" @click="addOrderList(goodA)">
                                    <span class="foodImg"><img :src="goodA.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goodA.goodsName}}</span>
                                    <span class="foodPrice">￥{{goodA.price}}元</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import axios from 'axios'
    export default{
        name:'Pos',
        mounted:function(){
            //初始化页面高度
            var vvH = document.documentElement.clientHeight ;
            document.getElementById('orderLan').style.height = vvH + 'px';
            document.getElementById('goodsItem').style.height = vvH + 'px';
            console.log(vvH);

        },
        created(){
            axios.get('http://jspang.com/DemoApi/oftenGoods.php')
            .then(response=>{
                console.log(response);
                this.hotGoodA=response.data;
            })
            .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            });

            axios.get('http://jspang.com/DemoApi/typeGoods.php')
            .then(response=>{
                console.log(response);
               // this.goodsAllD=response.data;
                this.goodsAllD=response.data[0];
            })
            .catch(error=>{
                console.log(error);
                alert('网络错误，不能访问');
            })
        },
        data(){
            return{
              //通过ajax获取数据
              allCount:0,
              allMoney:0,
              hotGoodA:[],
              goodsAllD:[],
              tableData: [], //goodsName, count, price
              hotGoods:[
                {
                    goodsId:1,
                    goodsName:'香辣鸡腿堡',
                    price:18
                }, {
                    goodsId:2,
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                    goodsName:'香脆鸡柳',
                    price:17
                }
                
            ],
            goodsAll:[
                {
                    goodsId:1,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                    goodsName:'香辣鸡腿堡',
                    price:18
                }, {
                    goodsId:2,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'田园鸡腿堡',
                    price:15
                }, {
                    goodsId:3,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                    goodsName:'和风汉堡',
                    price:15
                }, {
                    goodsId:4,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'快乐全家桶',
                    price:80
                }, {
                    goodsId:5,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'脆皮炸鸡腿',
                    price:10
                }, {
                    goodsId:6,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                    goodsName:'魔法鸡块',
                    price:20
                }, {
                    goodsId:7,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                    goodsName:'可乐大杯',
                    price:10
                }, {
                    goodsId:8,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                    goodsName:'雪顶咖啡',
                    price:18
                }, {
                    goodsId:9,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'大块鸡米花',
                    price:15
                }, {
                    goodsId:20,
                    goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                    goodsName:'香脆鸡柳',
                    price:17
                }
                
            ],
            }
        },
        methods:{
            //添加订单列表的方法
            addOrderList(goods){
                //判断要添加的商品是否已在订单列表中（根据id判断）
                let isExist = false;
                //let newGoods = [];
                for(let i=0; i<this.tableData.length;i++){
                    if(this.tableData[i].goodsId == goods.goodsId){
                        isExist = true;  //存在
                    }           
                }
                //根据判断结果做业务处理：存在加数量，不存在就推入数组
               if(!isExist){ //该方法为什么不写到for循环里，因为如果表格没有数据都不会进入循环了
                    var newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                    this.tableData.push(newGoods);
                }else{
                    let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                    arr[0].count++;
                    //console.log(arr);
                }
                //计算总价
                this.getAllMoney();
            },
            //减
            reduceOrderList(goods){
                //根据id删除
                this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
                //存在两个问题，第一个是数组下标来改变数组数值、对数组方法filter等不熟悉
                // for(let i=0; i<this.tableData.length;i++){
                //      if(this.tableData[i].goodsId == goods.goodsId){
                //          this.tableData[i] = null;
                //      }
                // }
                this.getAllMoney();
            },
            //汇总数量和金额
            getAllMoney(){
                this.allCount=0;
                this.allMoney=0;
                if(this.tableData){
                        this.tableData.forEach((element) => {
                    this.allCount += element.count;
                    this.allMoney += element.price*element.count;   
                });
                }
            },
            //删除全部订单
             delAllGoods() {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
            },
        }
    }
</script>
<style scoped>
  .pos{  width: 100%;  margin: 0 auto 0; }
  #orderLan{ background: #f1f1f2;}
  #orderItem{ background: #efeff1 ; border-right: 1px solid #e1e1e1;}
  .orderItem{  padding:10px;}
  .orderItem th{ text-align: center;}
  /*主体产品样式*/
  .goods{ padding:15px; background: #ffffff;}
  .goods h2{ font-size: 18px; padding-left:20px; border-left: 5px solid darkcyan; color: darkcyan; font-weight: normal; font-size: 20px; }
  .hotGoods ul{ padding: 20px 30px;}
  .hotGoods ul li{ float: left; margin-right: 6px; border: 1px solid #f1f1f2; margin-bottom: 15px; border-radius: 5px; padding: 6px 20px;}
  .hotGoods ul li a{ text-decoration: none;}
  .hotGoods ul li:hover{ cursor: pointer; color: #fff; background: darkcyan; border: 1px solid darkcyan;}
  .hotGoods ul:after{ content: ''; display: block; clear: both; }
  .products-all ul{ padding: 20px 30px;}
  .products-all ul li{ float:left; margin-right: 10px; padding-bottom: 20px;}
  .products-all ul li:hover{ cursor: pointer;}
  .products-all ul li img{ width:100px; }
  .products-all ul li span{ display: block;}


</style>
