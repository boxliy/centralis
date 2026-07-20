# 联系表单后端方案

用途：比较无需传统后台即可收集官网联系表单的可行方案。
阅读场景：为首页「提交你的产品需求」/「Send your product brief」表单选择数据收集和通知方式时阅读。
本文不定义最终选型、合同条款、价格接受范围、数据保留策略或生产密钥。

调研日期：2026-07-04

## 背景

Centralis 是静态 Astro 公司官网。联系表单需要满足：

- 中国大陆访问稳定。
- 尽量保留当前官网设计。
- 能把询盘发送给启枢团队，优先使用 `hello@qishusolution.com` 或企业内部消息通知。
- 尽量避免为了一个表单维护完整后台。

Formspree、Web3Forms 这类海外表单服务不是首选，因为中国大陆访客访问稳定性不可控。

## 候选概览

| 方案 | 部署形态 | 中国访问 | UI 控制 | 运维成本 | 适配判断 |
| --- | --- | --- | --- | --- | --- |
| Jinshuju / 金数据 | 国内 SaaS | 高 | 嵌入时中等，跳转表单页时低 | 低 | 最快上线的无后台方案。 |
| Wenjuanxing / 问卷星 | 国内 SaaS | 高 | 嵌入时中等 | 低 | 可用，但产品气质更像问卷。 |
| Formbricks | 开源自部署 | 取决于部署区域 | 中到高 | 中 | 需要开源表单平台时优先评估。 |
| HeyForm | 开源自部署 | 取决于部署区域 | 中 | 中 | 表单体验更漂亮，但可能像独立问卷页。 |
| OhMyForm | 开源自部署 | 取决于部署区域 | 中 | 中 | 老牌 Typeform 替代，生产前要确认维护活跃度。 |
| 轻量 serverless 接口 | 腾讯云 / 阿里云等 | 高 | 高 | 低到中 | 保留当前自定义表单时最合适。 |

## 国内 SaaS 方案

### 金数据

如果目标是最快上线，并且暂时不维护后台，金数据是第一候选。

相关能力：

- 在线创建表单并收集数据。
- 表单可嵌入自有网页。
- 可配置新数据邮件提醒和自定义邮件推送。
- 有免费版；去品牌、企业协作、高级自动化等能力通常需要付费。

来源：

- [金数据价格方案](https://jinshuju.net/plans)
- [在自有网页中嵌入表单](https://help.jinshuju.net/v4/articles/embedded-form)
- [新数据邮件提醒](https://help.jinshuju.net/articles/new-record-notification)

取舍：

- 上线最快。
- 数据管理、提醒、导出都在金数据后台完成。
- 嵌入表单的视觉不一定能完全贴合当前像素风官网。
- 去除供应商品牌或使用更高级流程可能需要付费。

### 问卷星

如果团队已有问卷星账号或流程，可以作为备选。

相关能力：

- 有免费版和企业付费版本。
- 支持问卷/表单收集和网站嵌入。
- 可按能力和套餐配置邮件、企业微信、钉钉等答卷提醒。

来源：

- [问卷星官网](https://www.wjx.cn/)
- [答卷提醒](https://www.wjx.cn/help/help.aspx?helpid=80)
- [问卷星收费项目](https://www.wjx.cn/help/help.aspx?helpid=354)

取舍：

- 国内成熟、访问稳定。
- 更偏问卷和调查产品，作为公司官网询盘表单可能品牌感弱一些。
- 企业提醒、去广告、权限等能力可能需要付费。

## 开源自部署方案

### Formbricks

开源自部署优先评估 Formbricks。

相关能力：

- 开源的表单、调研和体验管理平台。
- 支持 Docker 自托管。
- 自部署后数据在自己的基础设施中，适合需要数据掌控和多表单管理的场景。

来源：

- [Formbricks open-source form builder](https://formbricks.com/open-source-form-builder)
- [formbricks/formbricks](https://github.com/formbricks/formbricks)

取舍：

- 比一个联系表单接口完整很多。
- 需要维护服务、数据库、升级、备份、SMTP 或通知集成。
- 如果只有官网一个询盘表单，可能偏重。

### HeyForm

如果希望表单体验更像漂亮的互动问卷，可以评估 HeyForm。

相关能力：

- 开源表单构建器。
- 支持自托管。
- 面向 survey、quiz、poll 和互动式表单。

来源：

- [heyform/heyform](https://github.com/heyform/heyform)
- [HeyForm self-hosting](https://docs.heyform.net/open-source/self-hosting)

取舍：

- 视觉和交互比较友好。
- conversational form 风格可能不像当前官网的一部分，更像外部表单页。
- 仍然需要维护部署、升级、备份和通知。

### OhMyForm

老牌开源 Typeform 风格替代方案，可以作为补充调研对象。

相关能力：

- 开源表单、问卷和 questionnaire builder。
- 支持 embeddable forms。

来源：

- [ohmyform/ohmyform](https://github.com/ohmyform/ohmyform)

取舍：

- 能覆盖基础表单构建。
- 生产使用前需要确认当前维护活跃度、部署体验和安全更新情况。
- 同样需要承担自部署系统的维护成本。

## 轻量 Serverless 接口

这不是完整表单平台，而是在当前 Astro 表单后面加一个很小的提交接口。

可能形态：

1. 保留当前 Centralis 联系表单 UI。
2. 前端提交到 `/api/contact`。
3. 校验姓名、邮箱、需求类型、项目描述和简单反垃圾字段。
4. 通过企业邮箱 SMTP 发邮件，或推送到企业微信 / 飞书 / 钉钉。
5. 可选：写入数据库、表格或日志系统。

中国优先部署候选：

- 腾讯云 CloudBase / SCF。
- 阿里云 Function Compute。
- 公司现有服务器上的一个小接口，放在 Nginx 后面。

来源：

- [CloudBase 静态网站托管](https://cloud.tencent.com/document/product/876/123943)
- [CloudBase 云函数](https://docs.cloudbase.net/cloud-function/introduce)

取舍：

- 最能保留当前官网视觉和交互。
- 运行面最小，不必维护完整表单平台。
- 仍然需要管理密钥、反垃圾、日志和部署归属。

## 建议评估顺序

1. 先用金数据免费版验证无后台收集和邮件提醒是否满足需求。
2. 如果嵌入样式、品牌露出或数据归属不满意，改做轻量 serverless 接口。
3. 如果未来会有多个表单、问卷、客户反馈流程，再评估 Formbricks 自部署。

## 待决策问题

- 表单是否必须视觉上完全属于当前官网，还是可以接受嵌入式供应商表单？
- 提交数据要存在哪里：供应商后台、内部数据库，还是只发送通知？
- 邮件提醒是否足够，是否还需要企业微信 / 飞书 / 钉钉通知？
- 首次上线能否接受供应商品牌或广告露出？
- 谁负责 SMTP 凭证、通知 webhook、备份和反垃圾？
- 现在只是一个联系表单，还是未来需要可复用的表单平台？
