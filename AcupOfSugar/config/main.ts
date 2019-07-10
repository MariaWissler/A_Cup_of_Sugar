//DB 
const config = {
    port:process.env.PORT || 3000,
    db:"mongodb://localhost/cupofsugardb",
    test_env:"test",
    test_db:"mongodb://localhost/cupofsugardb",
    test_port:3001
    }
    
    export default config;