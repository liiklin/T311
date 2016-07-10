'use strict'

import Mock from 'mockjs'

// 获取所有的效力级别
Mock.mock(/\/effectLevels/, 'get', [
  {
    "id": 1,
    "name": "法律",
    "priority": 1
  },
  {
    "id": 2,
    "name": "行政法规",
    "priority": 2
  }
])

// 获取指定的效力级别
Mock.mock(/\/effectLevels\/\w+/, 'get', {
  "id": 1,
  "name": "法律",
  "priority": 1
})

// 获取所有类别
Mock.mock(/\/categories/, 'get', [
  {
    "id": 1,
    "name": "生产",
    "children":
    [
      {
        "id": 2,
        "name": "产品包装",
        "children": []
      },
      {
        "id": 3,
        "name": "行业分类",
        "children":
        [
          {
            "id": 4,
            "name": "食品添加剂",
            "children": []
          }
        ]
      }
    ]
  }
])

// 指定的分类
Mock.mock(/\/categories\/\w+/, 'get', {
  "id": 1,
  "name": "生产",
  "children":
  [
    {
      "id": 2,
      "name": "产品包装",
      "children": []
    },
    {
      "id": 3,
      "name": "行业分类",
      "children":
      [
        {
          "id": 4,
          "name": "食品添加剂",
          "children": []
        }
      ]
    }
  ]
})

// 指定分类指定子库下全部知识库内容
Mock.mock(/\/categories\/\w+\/bases\/\w+/, 'get', {
  "base": "questions",
  "category": {"id": 2, "name": "食品加工"},
  "items":
  [
    {
      "id": 3,
      "name": "食品添加剂过量是否违法?"
    },
    {
      "id": 4,
      "name": "食品添加剂过量应承担什么责任?"
    }
  ]
})

// 法律渊源
Mock.mock(/\/sources\?page_index=\d+&page_size=\d+/, 'get', {
  "totalcount": 52,
  "pageindex": 1,
  "pagesize": 50,
  "itemscount": 2,
  "items":
  [
    {
      "id": 1,
      "effect_level": {"id": 1, "name": "法律"},
      "category": {"id": 4, "name": "食品添加剂"},
      "name": "食品XX法",
      "number": "国家食品药品监督管理总局令第XX号",
      "certificate_authority": "国家食品药品监督管理总局",
      "issued_date": "2016-03-04",
      "effective_date": "2016-05-01",
      "state": "running",
      "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455"
    },
    {
      "id": 2,
      "effect_level": {"id": 1, "name": "法律"},
      "category": {"id": 4, "name": "食品添加剂"},
      "name": "食品XX法",
      "number": "国家食品药品监督管理总局令第XX号",
      "certificate_authority": "国家食品药品监督管理总局",
      "issued_date": "2016-04-06",
      "effective_date": "2016-05-01",
      "state": "running",
      "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455"
    }
  ]
})

// 指定的法律渊源
Mock.mock(/\/sources\/\w+/, 'get', {
    "id": 1,
    "effect_level": {"id": 1, "name": "法律"},
    "category": {"id": 4, "name": "食品添加剂"},
    "name": "食品XX法",
    "number": "国家食品药品监督管理总局令第XX号",
    "certificate_authority": "国家食品药品监督管理总局",
    "issued_date": "2016-03-04",
    "effective_date": "2016-05-01",
    "template": "....Markdown文本....",
    "state": "running",
    "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455"
})

// 指定的法律渊源文件全文，高亮指定的发条
Mock.mock(/\/sources\/\w+\/text?highlight="\w+"/, 'get', {
    "id": 1,
    "effect_level": {"id": 1, "name": "法律"},
    "category": {"id": 4, "name": "食品添加剂"},
    "name": "食品XX法",
    "number": "国家食品药品监督管理总局令第XX号",
    "certificate_authority": "国家食品药品监督管理总局",
    "issued_date": "2016-03-04",
    "effective_date": "2016-05-01",
    "text": "....高亮处理后的Markdown文本....",
    "state": "running",
    "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455"
})

// 指定法律渊源下的全部法条
Mock.mock(/\/sources\/\w+\/text?clauses/, 'get', [
  {
    "id": 1,
    "source_id": 1,
    "number": 1,
    "content": "法条1正文",
    "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455"
  },
  {
    "id": 2,
    "source_id": 1,
    "number": 2,
    "content": "法条2正文",
    "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455"
  }
])

// 指定法律渊源下的指定法条
Mock.mock(/\/sources\/\w+\/text?clauses\/\w+/, 'get', {
   "id": 1,
   "source_id": 1,
   "number": 1,
   "content": "法条1正文",
   "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455"
})

// 问题
Mock.mock(/\/questions\?category_id=\d+&page_index=\d+&page_size=\d+/, 'get', {
  "totalcount": 52,
  "pageindex": 1,
  "pagesize": 50,
  "itemscount": 2,
  "items":
  [
    {
      "id": 1,
      "category_id": 4,
      "name": "食品添加剂过量是否违法?",
      "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455",
      "follow_counter": 168
    },
    {
      "id": 2,
      "category_id": 4,
      "name": "食品添加剂过量会受到哪些惩罚?",
      "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455",
      "follow_counter": 199
    }
  ]
})

// 指定的问题
Mock.mock(/\/questions\/w+/, 'get', {
   "id": 1,
   "category_id": 4,
   "name": "食品添加剂过量是否违法?",
   "content": "问题内容",
   "ref_id": "0139d891-d3a4-456a-bad2-3a58f4ff5455",
   "follow_counter": 168,
   "relations":
   {
     "cases": [{"id": 22, "name": "关于西安杨某非法使用食品添加剂"}],
     "clauses": [{"id": 33, "name": "《食品安全法》第三十二条"}]
   }
})

export default Mock