<template>
    <div class="leftMenu" >
        <ul id="leftMenu1">
            <li>
                <img src="./images/logo.png" class="logoImg" >
            </li>
            <li>
                <router-link to="/pos">
                <i class="ic ic-gouwudai1"></i>
                <div>商品</div>
                </router-link>
            </li>
            <li>
                <i class="ic ic-zhifu"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="ic ic-mendian"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="ic ic-huiyuan1"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="ic ic-dingdan1"></i>
                <div>统计</div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'leftNav',
        mounted:function(){
            var vvH = document.documentElement.clientHeight;
            document.getElementById('leftMenu1').style.height = vvH + "px";
            console.log(vvH);

        },
        data(){
            return{

            }
        }
    }
</script>
<style scopoed>
body, ul , ul li{ margin: 0; padding: 0;} 
.leftMenu{ width: 10%; background:#f4f4f4; float: left;   }
.leftMenu img{  width: 70%; height: 70%; margin: 15% auto; display: block;   }
.leftMenu ul li{ list-style: none; width: 98%; height: 16.5%; overflow: hidden;border-right: 3px  solid darkcyan; border-bottom: 1px solid #d1d1d1; }
.leftMenu ul li:last-child{ border-bottom: 0;}
.leftMenu ul li:first-child{ padding: 0;}
.leftMenu ul li i{ display: block; color: darkcyan; margin:0 auto; padding-top:40px; text-align: center; font-size: 30px; }
.leftMenu ul li div{ font-size: 18px; text-align: center;    }

</style>
