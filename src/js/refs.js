const getData = (type) => fetch(`https://jsonplaceholder.typicode.com/${type}`).then(r => r.json());

const [ data, setData ] = useState([]);

useEffect(() => {
  Promise.all([ 'posts', 'users' ].map(getData))
    .then(([ posts, users ]) => {
      const usersObj = Object.fromEntries(users.map(n => [ n.id, n ]));
      setData(posts.map(n => ({
        post: n,
        user: usersObj[n.userId],
      })));
    });
}, []);

return (
  <div>
    {data.map(({ post, user }) => (
      <div>
        <h2>{post.title}</h2>
        <h3>{user.name}</h3>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);