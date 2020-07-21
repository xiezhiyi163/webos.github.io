<template>
  <div>
    <!--
     顶部
     -->
    <div id="navTop" style="background-color: #545c64;position: relative;height: 60px;-min-width: 976px;">
      <div style="width: 500px;position: absolute;top: 0;left: 0;" class="hidden-sm-and-down" data-PC>
        <span style="width: 60px;height: 40px;display: inline-block;background-color: white;float: left;margin:10px 10px 0;position: relative;z-index: 1;"></span>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">导航</template>
            <el-menu-item index="1-1">
              <div style="color: white !important;">
                二级导航
              </div>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2">处理中心</el-menu-item>
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>
      <div style="width: 140px;position: absolute;top: 0;left: 0;" class="hidden-md-and-up" data-Mob>
        <span style="width: 60px;height: 40px;display: inline-block;background-color: white;float: left;margin:10px 10px 0;position: relative;z-index: 1;"></span>
        <span style="width: 40px;height: 40px;display: inline-block;background-color: white;float: left;margin:10px 10px 0;position: relative;z-index: 1;"></span>
      </div>
      <div style="margin-left: 500px;padding-top: 10px;margin-right: 28%;display: table;max-width: 700px;" class="hidden-sm-and-down"
        data-PC>
        <div style="display: table-cell;width: 100%;">
          <el-input placeholder="请输入内容" v-model="input" clearable>
          </el-input>
        </div>
        <div style="display: table-cell;">
          <el-button>
            搜索
          </el-button>
        </div>
      </div>
      <div style="margin-left: 150px;padding-top: 10px;margin-right: 60px;display: table;" class="hidden-md-and-up"
        data-Mob>
        <div style="display: table-cell;width: 100%;">
          <el-input placeholder="请输入内容" v-model="input" clearable>
          </el-input>
        </div>
        <div style="display: table-cell;">
          <el-button>
            搜索
          </el-button>
        </div>
      </div>
      <div style="padding-top: 10px;position: absolute;top: 0;right: 0;">
        <div style="display: inline-block;vertical-align: top;" class="hidden-sm-and-down" data-PC>
          <span style="margin-right: 15px;vertical-align: top;padding-top: 10px;display: inline-block;color: white;">
            <el-badge :value="120" :max="99" is-dot class="item">
              会员
            </el-badge>
          </span>
          <span style="margin-right: 15px;vertical-align: top;padding-top: 10px;display: inline-block;color: white;">
            <el-badge :value="120" :max="99" class="item">
              消息
            </el-badge>
          </span>
          <span style="margin-right: 15px;vertical-align: top;padding-top: 10px;display: inline-block;color: white;">
            <el-badge :value="0" :max="99" is-dot class="item">
              动态
            </el-badge>
          </span>
          <span style="margin-right: 10px;padding-bottom: 10px;">
            <el-avatar> user </el-avatar>
          </span>
        </div>
        <div style="display: inline-block;vertical-align: top;" class="hidden-md-and-up" data-Mob>
          <span style="margin-right: 10px;padding-bottom: 10px;">
            <el-avatar> user </el-avatar>
          </span>
        </div>
      </div>
    </div>
    <!--
     内容
     -->
    <div>
      <!-- //轮播：普通跟旋转，旋转木马如果是做成卡片式，可以使用swiper插件去处理 -->
      <div>
        <!-- (轮播略过) -->
      </div>
      <!-- //多栏布局 -->
      <div>
        <div style="height: 30px;background-color: #ccc;width: 100%;" class="hidden-sm-and-up" data-Mob></div>
        <div style="display: table;">
          <div style="display: table-cell;height: 30px;background-color: #ccc;width: 150px;float: left;" class="hidden-xs-only" data-PC></div>
          <div style="display: table-cell;height: 30px;background-color: #ccc;width: 0.1px;float: left;" class="hidden-sm-and-up" data-Mob>
            <!-- 占位，不填内容 -->
          </div>
          <div style="display: table-cell;height: 30px;background-color: #eee;width: 100%;"></div>
          <div style="display: table-cell;height: 30px;background-color: #ccc;width: 150px;float: right;" class="hidden-sm-and-down" data-PC></div>
          <div style="clear: both;"></div>
        </div>
        <div style="height: 30px;background-color: #ccc;width: 100%;" class="hidden-md-and-up" data-Mob></div>
      </div>
      <div style="margin-top: 10px;"><hr style="border-width: 1px !important;    border-style: inset !important;"></div>
      <!-- //左边正文布局 -->
      <div style="margin-top: 10px;">
        <div style="display: table;">
          <div style="display: table-cell;height: 30px;background-color: #eee;width: 100%;"></div>
          <div style="display: table-cell;height: 30px;background-color: #ccc;width: 150px;float: right;" class="hidden-sm-and-down" data-PC></div>
          <div style="display: table-cell;height: 30px;background-color: #ccc;width: 0.1px;float: right;" class="hidden-md-and-up" data-Mob>
            <!-- 占位，不填内容 -->
          </div>
          <div style="clear: both;"></div>
        </div>
        <div style="height: 30px;background-color: #ccc;width: 100%;" class="hidden-md-and-up" data-Mob></div>
      </div>
      <div style="margin-top: 10px;"><hr style="border-width: 1px !important;    border-style: inset !important;"></div>
      <!-- //右边正文布局 -->
      <div style="margin-top: 10px;">
        <div style="height: 30px;background-color: #ccc;width: 100%;" class="hidden-md-and-up" data-Mob></div>
        <div style="display: table;">
          <div style="display: table-cell;height: 30px;background-color: #ccc;width: 150px;float: left;" class="hidden-sm-and-down" data-PC></div>
          <div style="display: table-cell;height: 30px;background-color: #ccc;width: 0.1px;float: left;" class="hidden-md-and-up" data-Mob>
            <!-- 占位，不填内容 -->
          </div>
          <div style="display: table-cell;height: 30px;background-color: #eee;width: 100%;"></div>
          <div style="clear: both;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex2: '1' //顶部PC二级导航索引
      }
    },
    methods: {
      handleSelect(key, keyPath) { //顶部PC二级导航切换回调方法
        if (keyPath[0] == '1') {
          setTimeout(function() {
            $('.el-submenu__title').eq(0).css({
              'color': 'white',
              'border': 0
            })
          }, 0)
        }
      }
    }
  }
</script>

<style>
</style>
