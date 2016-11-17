<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link to="/home" class="navbar-brand"  href="javascript:void(0)">Angularjs 中文版API v1.3.9</router-link><span style="float:left;color:red;padding-top:20px">作者：核桃</span>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

          <form class="navbar-form navbar-right" role="search">
            <div class="form-group">
              <input type="text"  class="form-control" placeholder="Search" >
           <!--   <div ng-show="ishow" style="position: absolute;z-index:9999;overflow-y:auto;height:500px;width:170px">
                <div ng-repeat="tiem in mians">
                  <a style="color: #337ab7;background-color:white" href="javascript:void(0)" ui-sref=".{{dd.url}}" ng-click="imd()" class="list-group-item" ng-repeat="dd in tiem.children|filter :val">{{dd.name}}</a>
                </div>
              </div>-->
            </div>
          </form>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <div class="col-md-3" style="position: static">
      <div style="overflow-y:auto;overflow-x:hidden;position: absolute; height: 100%;width: 24%">
        <div class="list-group" v-for="(node,index) in menu">
          <a href="javascript:void(0)" class="list-group-item" style="padding-left:37px;height: 47px" @click="domclick(index)">
            <i  :class="{add:index!==inde,ads:index===inde}" ></i>{{node.name}}
          </a>
          <div v-show="index===inde">
            <template v-for="(nodesub,key) in node.children">
            <router-link :to="nodesub.url" :class="{active:index==row&&key==clomu}" class="list-group-item" @click="subclick(index,key)">
              <i class="icon-chevron-right"></i>{{nodesub.name}}

            </router-link>
            </template>
          </div>
        </div>
      </div>

    </div>

    <div class="col-md-9"  data-ui-view="" style="overflow-y:auto;overflow-x:hidden;">
      <div  style="overflow-y:auto;overflow-x:hidden; ">
        <router-view></router-view>

      </div>

    </div>
    <div style="text-align:center">
      <span>粤ICP备 16004646号</span>
    </div>
    </div>
</template>
<script>
  import data  from '../assets/js/data'
    export default{
        data(){
            return{
              menu:data.menu,
              inde:"",
              row:"",
              clomu:""
            }
        },
      methods:{
          domclick:function (i) {
            if(this.inde===i){
              this.inde="";
            }else {
              this.inde = i;
            }
          },
        subclick:function (i,o) {
         this.row=i;
          this.clomu=o;
        }
      }
    }
</script>
