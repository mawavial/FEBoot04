function getUser(callback) { 
  setTimeout(() => { 
    console.log("Usuário carregado"); 
    callback({ id: 1, name: "Thiago" }); 
  }, 2000); 
} 
 
function getPosts(userId, callback) { 
  setTimeout(() => { 
    console.log("Posts carregados"); 
    callback(["Post 1", "Post 2"]); 
  }, 2000); 
} 
 
getUser((user) => { 
  console.log("Usuário:", user.name); 
  getPosts(user.id, (posts) => { 
    console.log("Posts:", posts); 
  }); 
}); 
