/**
 * Created by Moon on 2017/7/22.
 */
[{
  "label": "用户",
  "name": "User",
  "singular": "user",
  "url": "lists/users",
  "fields": [{
    "label": "基本信息",
    "fields": [{"label": "昵称", "name": "nickname", "type": "Text", "required": true}, {
      "label": "密码",
      "name": "password",
      "type": "Password",
      "secured": true
    }, {"label": "头像", "name": "avatar", "type": "File", "accept": "image/*"}]
  }, {
    "label": "社交信息",
    "fields": [{"label": "等级", "name": "level", "type": "Text"}, {
      "label": "关注",
      "name": "follow",
      "type": "Reference",
      "ref": {
        "label": "用户",
        "name": "User",
        "singular": "user",
        "url": "lists/users",
        "inversePaths": [{"list": "Post", "field": "author", "label": "博客"}, {
          "list": "User",
          "field": "follow",
          "label": "真正的粉丝"
        }, {"list": "Album", "field": "author", "label": "相册"}],
        "creatorField": "_id",
        "nameField": "nickname",
        "searchFields": [],
        "total": 9
      },
      "many": true
    }, {
      "label": "收藏",
      "name": "collect",
      "type": "Reference",
      "ref": {
        "label": "游记",
        "name": "Post",
        "singular": "post",
        "url": "lists/posts",
        "inversePaths": [],
        "creatorField": "author",
        "nameField": "title",
        "searchFields": ["title", "intro", "tags", "content"],
        "total": 3
      },
      "many": true
    }, {
      "label": "点赞",
      "name": "like",
      "type": "Reference",
      "ref": {
        "label": "游记",
        "name": "Post",
        "singular": "post",
        "url": "lists/posts",
        "inversePaths": [],
        "creatorField": "author",
        "nameField": "title",
        "searchFields": ["title", "intro", "tags", "content"],
        "total": 3
      },
      "many": true
    }, {"label": "个性签名", "name": "intro", "type": "TextArea"}, {
      "label": "相册",
      "name": "album",
      "type": "Number"
    }, {"label": "主页访问人数", "name": "visited", "type": "Number"}]
  }, {
    "label": "其他信息",
    "fields": [{"label": "生日", "name": "birth", "type": "Date"}, {
      "label": "性别",
      "name": "sex",
      "type": "Enum",
      "values": ["男", "女"]
    }]
  }],
  "inversePaths": [{"list": "Post", "field": "author", "label": "博客"}, {
    "list": "User",
    "field": "follow",
    "label": "真正的粉丝"
  }, {"list": "Album", "field": "author", "label": "相册"}],
  "canreg": {
    "type": "User",
    "info": {
      "_id": "597017ae1be16d56a5febe6f",
      "nickname": "test",
      "password": "1234",
      "level": "Lv9",
      "follow": ["596f886e3e76db53b7361639", "596f88a23e76db53b736163a", "596f88d63e76db53b736163b", "596f89063e76db53b736163c", "596f89843e76db53b736163d", "5970061afee0c755880007a3"],
      "collect": ["597007b2fee0c755880007a4"],
      "like": ["597007b2fee0c755880007a4"],
      "__v": 0,
      "avatar": {
        "fieldname": "avatar",
        "originalname": "a73146ee53e7140e1eb830b8820a2538.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "data/user",
        "filename": "363365c7fcb2dd70b9c08f86f52555c0",
        "path": "data/user/363365c7fcb2dd70b9c08f86f52555c0",
        "size": 8121
      }
    }
  },
  "creatorField": "_id",
  "securedFields": ["password"],
  "allFields": ["nickname", "password", "avatar", "level", "follow", "collect", "like", "intro", "album", "visited", "birth", "sex"],
  "nameField": "nickname",
  "searchFields": [],
  "total": 9
}, {
  "label": "景点",
  "name": "Scene",
  "singular": "scene",
  "url": "lists/scenes",
  "fields": [{
    "label": "基本信息",
    "fields": [{"label": "名字", "name": "name", "type": "Text"}, {
      "label": "坐标",
      "name": "latitude",
      "type": "Text"
    }, {"label": "国家", "name": "country", "type": "Text"}]
  }],
  "inversePaths": [],
  "canreg": {
    "type": "User",
    "info": {
      "_id": "597017ae1be16d56a5febe6f",
      "nickname": "test",
      "password": "1234",
      "level": "Lv9",
      "follow": ["596f886e3e76db53b7361639", "596f88a23e76db53b736163a", "596f88d63e76db53b736163b", "596f89063e76db53b736163c", "596f89843e76db53b736163d", "5970061afee0c755880007a3"],
      "collect": ["597007b2fee0c755880007a4"],
      "like": ["597007b2fee0c755880007a4"],
      "__v": 0,
      "avatar": {
        "fieldname": "avatar",
        "originalname": "a73146ee53e7140e1eb830b8820a2538.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "data/user",
        "filename": "363365c7fcb2dd70b9c08f86f52555c0",
        "path": "data/user/363365c7fcb2dd70b9c08f86f52555c0",
        "size": 8121
      }
    }
  },
  "securedFields": [],
  "allFields": ["name", "latitude", "country"],
  "nameField": "name",
  "searchFields": [],
  "total": 0
}, {
  "label": "足迹",
  "name": "Footprint",
  "singular": "footprint",
  "url": "lists/footprints",
  "fields": [{
    "label": "",
    "fields": [{
      "label": "景点",
      "name": "scene",
      "type": "Reference",
      "ref": {
        "label": "景点",
        "name": "Scene",
        "singular": "scene",
        "url": "lists/scenes",
        "inversePaths": [],
        "nameField": "name",
        "searchFields": [],
        "total": 0
      }
    }, {"label": "照片", "name": "photo", "type": "File", "accept": "image/*"}]
  }],
  "inversePaths": [],
  "canreg": {
    "type": "User",
    "info": {
      "_id": "597017ae1be16d56a5febe6f",
      "nickname": "test",
      "password": "1234",
      "level": "Lv9",
      "follow": ["596f886e3e76db53b7361639", "596f88a23e76db53b736163a", "596f88d63e76db53b736163b", "596f89063e76db53b736163c", "596f89843e76db53b736163d", "5970061afee0c755880007a3"],
      "collect": ["597007b2fee0c755880007a4"],
      "like": ["597007b2fee0c755880007a4"],
      "__v": 0,
      "avatar": {
        "fieldname": "avatar",
        "originalname": "a73146ee53e7140e1eb830b8820a2538.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "data/user",
        "filename": "363365c7fcb2dd70b9c08f86f52555c0",
        "path": "data/user/363365c7fcb2dd70b9c08f86f52555c0",
        "size": 8121
      }
    }
  },
  "securedFields": [],
  "allFields": ["scene", "photo"],
  "nameField": "_id",
  "searchFields": [],
  "total": 0
}, {
  "label": "游记分类",
  "name": "Category",
  "singular": "category",
  "url": "lists/categories",
  "fields": [{"label": "", "fields": [{"label": "名字", "name": "name", "type": "Text"}]}],
  "inversePaths": [{"list": "Post", "field": "categories", "label": "博客"}],
  "canreg": {
    "type": "User",
    "info": {
      "_id": "597017ae1be16d56a5febe6f",
      "nickname": "test",
      "password": "1234",
      "level": "Lv9",
      "follow": ["596f886e3e76db53b7361639", "596f88a23e76db53b736163a", "596f88d63e76db53b736163b", "596f89063e76db53b736163c", "596f89843e76db53b736163d", "5970061afee0c755880007a3"],
      "collect": ["597007b2fee0c755880007a4"],
      "like": ["597007b2fee0c755880007a4"],
      "__v": 0,
      "avatar": {
        "fieldname": "avatar",
        "originalname": "a73146ee53e7140e1eb830b8820a2538.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "data/user",
        "filename": "363365c7fcb2dd70b9c08f86f52555c0",
        "path": "data/user/363365c7fcb2dd70b9c08f86f52555c0",
        "size": 8121
      }
    }
  },
  "securedFields": [],
  "allFields": ["name"],
  "nameField": "name",
  "searchFields": [],
  "total": 0
}, {
  "label": "游记",
  "name": "Post",
  "singular": "post",
  "url": "lists/posts",
  "fields": [{
    "label": "基本信息",
    "fields": [{"label": "标题", "name": "title", "type": "Text"}, {
      "label": "简介",
      "name": "intro",
      "type": "TextArea"
    }, {"label": "标签", "name": "tags", "type": "Text"}, {
      "label": "作者",
      "name": "author",
      "type": "Reference",
      "noedit": true,
      "ref": {
        "label": "用户",
        "name": "User",
        "singular": "user",
        "url": "lists/users",
        "inversePaths": [{"list": "Post", "field": "author", "label": "博客"}, {
          "list": "User",
          "field": "follow",
          "label": "真正的粉丝"
        }, {"list": "Album", "field": "author", "label": "相册"}],
        "creatorField": "_id",
        "nameField": "nickname",
        "searchFields": [],
        "total": 9
      }
    }, {"label": "内容", "name": "content", "type": "RichText"}, {
      "label": "封面图",
      "name": "photo",
      "type": "File",
      "accept": "image/*"
    }]
  }, {
    "label": "附加信息",
    "fields": [{
      "label": "驴友",
      "name": "fellow",
      "type": "Reference",
      "ref": {
        "label": "用户",
        "name": "User",
        "singular": "user",
        "url": "lists/users",
        "inversePaths": [{"list": "Post", "field": "author", "label": "博客"}, {
          "list": "User",
          "field": "follow",
          "label": "真正的粉丝"
        }, {"list": "Album", "field": "author", "label": "相册"}],
        "creatorField": "_id",
        "nameField": "nickname",
        "searchFields": [],
        "total": 9
      },
      "many": true
    }, {
      "label": "足迹",
      "name": "footprint",
      "type": "Reference",
      "ref": {
        "label": "足迹",
        "name": "Footprint",
        "singular": "footprint",
        "url": "lists/footprints",
        "inversePaths": [],
        "nameField": "_id",
        "searchFields": [],
        "total": 0
      },
      "many": true
    }, {
      "label": "分类",
      "name": "categories",
      "type": "Reference",
      "ref": {
        "label": "游记分类",
        "name": "Category",
        "singular": "category",
        "url": "lists/categories",
        "inversePaths": [{"list": "Post", "field": "categories", "label": "博客"}],
        "nameField": "name",
        "searchFields": [],
        "total": 0
      },
      "many": true
    }, {"label": "发布日期", "name": "createdDate", "type": "Date", "noedit": true}, {
      "label": "修改日期",
      "name": "modifiedDate",
      "type": "Date",
      "noedit": true
    }]
  }, {
    "label": "其他",
    "fields": [{"label": "浏览次数", "name": "visited", "type": "Number"}, {
      "label": "置顶",
      "name": "top",
      "type": "Boolean"
    }]
  }],
  "inversePaths": [],
  "canreg": true,
  "creatorField": "author",
  "securedFields": [],
  "allFields": ["title", "intro", "tags", "author", "content", "photo", "fellow", "footprint", "categories", "createdDate", "modifiedDate", "visited", "top"],
  "nameField": "title",
  "searchFields": ["title", "intro", "tags", "content"],
  "total": 3
}, {
  "label": "相册",
  "name": "Album",
  "singular": "album",
  "url": "lists/albums",
  "fields": [{
    "label": "",
    "fields": [{"label": "名称", "name": "name", "type": "Text", "required": true}, {
      "label": "所有者",
      "name": "owner",
      "type": "Reference",
      "noedit": true,
      "ref": {
        "label": "用户",
        "name": "User",
        "singular": "user",
        "url": "lists/users",
        "inversePaths": [{"list": "Post", "field": "author", "label": "博客"}, {
          "list": "User",
          "field": "follow",
          "label": "真正的粉丝"
        }, {"list": "Album", "field": "author", "label": "相册"}],
        "creatorField": "_id",
        "nameField": "nickname",
        "searchFields": [],
        "total": 9
      }
    }, {"label": "介绍", "name": "intro", "type": "Text"}, {
      "label": "发布日期",
      "name": "createdDate",
      "type": "Date",
      "noedit": true
    }, {"label": "修改日期", "name": "modifiedDate", "type": "Date", "noedit": true}]
  }],
  "inversePaths": [],
  "canreg": true,
  "creatorField": "owner",
  "securedFields": [],
  "allFields": ["name", "owner", "intro", "createdDate", "modifiedDate"],
  "nameField": "name",
  "searchFields": [],
  "total": 2
}, {
  "label": "相片",
  "name": "Photo",
  "singular": "photo",
  "url": "lists/photos",
  "fields": [{
    "label": "",
    "fields": [{"label": "名称", "name": "name", "type": "Text", "required": true}, {
      "label": "照片",
      "name": "photo",
      "type": "File",
      "accept": "image/*"
    }, {
      "label": "相册",
      "name": "album",
      "type": "Reference",
      "required": true,
      "ref": {
        "label": "相册",
        "name": "Album",
        "singular": "album",
        "url": "lists/albums",
        "inversePaths": [],
        "creatorField": "owner",
        "nameField": "name",
        "searchFields": [],
        "total": 2
      }
    }, {"label": "介绍", "name": "intro", "type": "Text"}, {
      "label": "发布日期",
      "name": "createdDate",
      "type": "Date",
      "noedit": true
    }, {"label": "修改日期", "name": "modifiedDate", "type": "Date", "noedit": true}]
  }],
  "inversePaths": [],
  "canreg": {
    "type": "User",
    "info": {
      "_id": "597017ae1be16d56a5febe6f",
      "nickname": "test",
      "password": "1234",
      "level": "Lv9",
      "follow": ["596f886e3e76db53b7361639", "596f88a23e76db53b736163a", "596f88d63e76db53b736163b", "596f89063e76db53b736163c", "596f89843e76db53b736163d", "5970061afee0c755880007a3"],
      "collect": ["597007b2fee0c755880007a4"],
      "like": ["597007b2fee0c755880007a4"],
      "__v": 0,
      "avatar": {
        "fieldname": "avatar",
        "originalname": "a73146ee53e7140e1eb830b8820a2538.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "data/user",
        "filename": "363365c7fcb2dd70b9c08f86f52555c0",
        "path": "data/user/363365c7fcb2dd70b9c08f86f52555c0",
        "size": 8121
      }
    }
  },
  "securedFields": [],
  "allFields": ["name", "photo", "album", "intro", "createdDate", "modifiedDate"],
  "nameField": "name",
  "searchFields": [],
  "total": 4
}, {
  "label": "管理员",
  "name": "Admin",
  "singular": "admin",
  "url": "lists/admins",
  "fields": [{
    "label": "",
    "fields": [{"label": "昵称", "name": "nickname", "type": "Text"}, {
      "label": "邮箱",
      "name": "email",
      "type": "Email"
    }, {"label": "密码", "name": "password", "type": "Password", "secured": true}, {
      "label": "日期测试",
      "name": "date_test",
      "type": "Date"
    }, {"label": "日期区间测试", "name": "daterange_test", "type": "DateRange"}]
  }],
  "inversePaths": [],
  "canreg": {
    "type": "User",
    "info": {
      "_id": "597017ae1be16d56a5febe6f",
      "nickname": "test",
      "password": "1234",
      "level": "Lv9",
      "follow": ["596f886e3e76db53b7361639", "596f88a23e76db53b736163a", "596f88d63e76db53b736163b", "596f89063e76db53b736163c", "596f89843e76db53b736163d", "5970061afee0c755880007a3"],
      "collect": ["597007b2fee0c755880007a4"],
      "like": ["597007b2fee0c755880007a4"],
      "__v": 0,
      "avatar": {
        "fieldname": "avatar",
        "originalname": "a73146ee53e7140e1eb830b8820a2538.jpg",
        "encoding": "7bit",
        "mimetype": "image/jpeg",
        "destination": "data/user",
        "filename": "363365c7fcb2dd70b9c08f86f52555c0",
        "path": "data/user/363365c7fcb2dd70b9c08f86f52555c0",
        "size": 8121
      }
    }
  },
  "creatorField": "_id",
  "securedFields": ["password"],
  "allFields": ["nickname", "email", "password", "date_test", "daterange_test"],
  "nameField": "nickname",
  "searchFields": [],
  "total": 2
}]
