<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logoFooter.png" alt="">
            <p>居家商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/zephyrlind" target="_blank">关于我们</a><span>|</span>
            <a href="javascript:;">帮助中心</a><span>|</span>
            <a href="javascript:;">售后服务</a><span>|</span>
            <a href="javascript:;">关于货源</a><span>|</span>
        </div>
        <div class="copyright">
            Copyright ©2020 <span class="domain">work.zephyrl.co</span> All Rights Received
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss">
    .footer {
        height: 234px;
        border-top: 4px solid #FF6600;
        background-color: #333;
        color: #999;
        font-size: 16px;
        text-align: center;
        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;
            img {
                width: 53px;
                height: 53px;
                margin-bottom: 13px;

            }
        }
        .footer-link {
            a {
                color: #999;
                display: inline-block;
            }
            span {
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
        .copyright {
            .domain {
                color: #ff6600;
            }
        }
    }
</style>