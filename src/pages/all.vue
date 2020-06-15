<template>
  <div class="container">
    <div class="product-box">
      <div class="wrapper">
        <!-- banner 省略 -->
        <div class="list-box">
          <div class="list" v-for="(itemRow, i) in allItemsList" :key="i">
            <div class="item" v-for="(item, j) in itemRow" :key="j">
              <div class="item-img" @click="goToDetail">
                <img :src="item.detailPic[0]" alt />
              </div>
              <div class="item-info">
                <h3>{{item.name}}</h3>
                <p>{{item.description}}</p>
                <p class="price" v-on:click="addCart(item.id)">{{item.price}}元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      v-bind:showModal="showModal"
      v-on:submit="goToCart"
      v-on:cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>

<script>
    import Modal from './../components/Modal';
    import ServiceBar from './../components/ServiceBar'
    import Qs from 'qs'
    export default {
        components: {
            ServiceBar,
            Modal
        },
        name: 'all',
        data(){
            return {
                allItemsList: [],
                showModal: false
            }
        },
        
        mounted() {
            // this.init();
            this.getItemsList();
        },
        methods: {
            getItemsList() {
                // 全部商品
                this.axios.get('/products').then(res => {
                    //工具数组
                    let allList = [];
                    for (let i = 0; i < res.list.length; i+=4) {
                        //工具数组中的每一个元素
                        let list=[];
                        for(let j = 0;j < 4 ;j++){
                            //如果长度超过查出来的最大，说明后面没有值了，无法赋值故break
                            if((i+j)>=res.list.length)
                                break;
                            //否则将查出来的值放在工具数组的元素里
                            // window.console.log(res.list[i+j])
                            list.push(res.list[i+j]); 
                        }
                        //最后把元素赋给工具数组
                        allList.push(list);
                    }
                    this.allItemsList = allList;
                })
            },
            addCart: function(id){
                this.showModal = true;
                this.axios.post('/submit', Qs.stringify({
                    productId:id,
                    count: 1
                })).then(()=>{
                    this.$message.success('添加成功！');
                    this.axios.get('/carts/products/sum').then((res=0)=>{
                        this.$store.dispatch('saveCartCount',res);
                    })
                    // this.$router.push('cart')
                });
            },
            goToCart() {
                this.$router.push('cart')
            },
            goToDetail() {
                window.console.log("fuck2")
            }
        }
    }
    
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.container {
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    .wrapper {
      margin: 0 8px;
      // margin-right: 5px;
      // margin-left: 5px;
      display: flex;
      .list-box {
        .list {
          @include flex("start");
          // width: 986px;
          width: 1210px;
          margin-bottom: 14px;

          // 想让两个盒子隔14px，最左边右边贴边
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 270px;
            height: 370px;
            background-color: $colorG;
            text-align: center;
            //（1210 -270*4）/5 flex有margin-left所以稍微减了点
            margin-left: 27px;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7cef68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
              margin: 20px;
            }
            .item-info {
              h3 {
                font-size: $fontJ;
                color: $colorB;
                font-weight: bold;
                line-height: $fontJ;
                margin-top: 15px;
              }
              p {
                color: #000;
                line-height: 18px;
                margin: 15px 25px 13px;
                font-size: 13px;
              }
              .price {
                margin-top: 10%;
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  content: " ";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>