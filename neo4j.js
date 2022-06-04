var neo4j = require("neo4j-driver");
var driver = neo4j.driver(
    "neo4j://127.0.0.1:7687",neo4j.auth.basic("neo4j", "123")
  );
// windows.x=[];
windows = global;
//   console.log(driver);
var session = driver.session({
    database: "neo4j",
    defaultAccessMode: neo4j.session.WRITE
  });
function get_data( index, params){
  query = ""
  if (index == 0){
    query = "MATCH (m:Movie) WHERE m.title="+"'"+`${params[0]}` +"'"+" RETURN  m.rating;"  
    // // 评分
  }
      
  else if (index == 1){
    query = "MATCH (m:Movie)-[r:actor]->(p:Person) WHERE p.name="+"'"+`${params[0]}` +"'"+"RETURN *"  //上映时间


  }
      
  else if (index == 2){
    query = "MATCH (m:Movie)-[r:is]->(g:Genre) WHERE m.title="+"'"+`${params[0]}` +"'"+" RETURN g.name;"  // 类型

  }
      
  else if (index == 3){
    query = "MATCH (m:Movie) WHERE m.title="+"'"+`${params[0]}` +"'"+" RETURN  m.introduction;"  // 简介
  }
      
  else if (index == 4){
    query = "MATCH (p:Person)-[r:actedin]->(m:Movie) WHERE m.title="+"'"+`${params[0]}` +"'"+" RETURN p.name;"  // 演员列表
  }
      
  else if (index == 5){
    query = "MATCH (p:Person) WHERE p.name="+"'"+`${params[0]}` +"'"+"  RETURN p.biography;"  // 演员介绍
  }
      
  else if (index == 6){
    query = "MATCH(n:Person)-[:actedin]-(m:Movie) WHERE n.name ="+"'"+`${params[0]}` +"'"+" " +"MATCH(g:Genre)-[:is]-(m) WHERE g.name="+"'"+`${params[1]}` +"'"+" RETURN distinct  m.title" // 某演员演过什么类型电影有哪些
  }
      
  else if (index == 7){
    query = "MATCH(n:Person)-[:actedin]->(m:Movie) WHERE n.name="+"'"+`${params[0]}` +"'"+" RETURN m.title" // 某演员演过什么电影
  }
      
  else if (index == 8){
    query = "MATCH(n:Person)-[:actedin]-(m:Movie) WHERE n.name ="+"'"+`${params[0]}` +"'"+" and m.rating> "+"'"+`${params[1]}` +"'"+" RETURN m.title"  // 参演评分 大于 x
  }
     
  else if (index == 9){
    query = "MATCH(n:Person)-[:actedin]-(m:Movie) WHERE n.name ="+"'"+`${params[0]}` +"'"+" and m.rating < "+"'"+`${params[1]}` +"'"+" RETURN m.title;" // 参演评分 小于 x
  }
      
  else if (index == 10){
    query = "MATCH(n:Person)-[:actedin]-(m:Movie) WHERE n.name ="+"'"+`${params[0]}` +"'"+" "+"MATCH(p:Genre)-[:is]-(m) RETURN distinct  p.name"  // 演员演过哪些类型电影
  }
      
  else if (index == 11){
    query = "MATCH(p1:Person)-[:actedin]->(m:Movie) MATCH(p2:Person)-[:actedin]->(m)" +"WHERE p1.name="+"'"+`${params[0]}` +"'"+" and p2.name="+"'"+`${params[1]}` +"'"+" RETURN m.title;"  // 演员a和演员b合作过的电影
  }

  else if (index == 12)
  {
    query = "MATCH(n)-[:actedin]-(m) WHERE n.name ="+"'"+`${params[0]}` +"'"+" RETURN count(*);"  // 演员演过电影数量
  }
  else if (index == 13){
    query = "MATCH(n:Person) WHERE n.name="+"'"+`${params[0]}` +"'"+" RETURN n.birth;"  // 演员出生日期

  }
  var readTxResultPromise = session.readTransaction(txc => {
    // used transaction will be committed automatically, no need for explicit commit/rollback
  
    var result = txc.run(query)
    // at this point it is possible to either return the result or process it and return the
    // result of processing it is also possible to run more statements in the same transaction
    return result
  })
    // returned Promise can be later consumed like this:
    readTxResultPromise
    .then(result => {
      console.log(result.records);
      // windows.x=result.records;
    })
    .catch(error => {
      console.log(error)
    })
    .then(() => session.close())
};


get_data(1, ['黄渤']);

// console.log(windows.x);

  