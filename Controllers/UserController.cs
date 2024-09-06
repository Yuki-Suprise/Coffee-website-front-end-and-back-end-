using System;
using System.Data;
using System.Data.SqlClient;
using System.Web.Http;

namespace Coffee.Controllers
{
    public class UserController : ApiController
    {
        private string connStr = "Data Source=.;Initial Catalog=Coffee;User Id=sa;Password=123456";
        /*Data Source 是数据源，Initial Catalog是数据库的名称，User ID是登录数据的用户名，Pwd是登录数据库的密码。*/

        // 跨域
        public string Options()
        {
            return null;
        }

        // GET
        [HttpGet]
        public string Login(string username, string password)
        {
            try
            {
                if (string.IsNullOrEmpty(username))
                {
                    return "请输入用户名！";
                }

                if (string.IsNullOrEmpty(password))
                {
                    return "请输入密码！";
                }

                SqlConnection sqlConnection = new SqlConnection(connStr);
                sqlConnection.Open();
                string sql = $"SELECT COUNT(*) FROM [user] WHERE username = '{username.Trim()}' AND password = '{password.Trim()}'";
                /* Trim（）删除字符串中多余的空格*/
                DataSet dataSet = new DataSet();
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(sql, sqlConnection);
                /* SqlDataAdapter用于填充 DataSet 和更新 SQL Server 数据库的一组数据命令和一个数据库连接*/
                sqlDataAdapter.Fill(dataSet);

                if (dataSet.Tables.Count > 0)
                {
                    DataTable dt = dataSet.Tables[0];
                    /*创建一个表*/
                    if (dt.Rows.Count > 0)
                    {
                        int count = dt.Rows[0][0].ToString() == "" ? 0 : (int)dt.Rows[0][0];

                        if (count > 0)
                        {
                            return "登录成功！";
                        }
                        else
                        {
                            return "登录失败！";
                        }
                    }
                    else
                    {
                        return "登录失败！";
                    }
                }
                else
                {
                    return "登录失败！";
                }
            }
            catch (Exception ex)
            {
                return "登录失败！";
            }
        }

        // POST
        [HttpPost]
        public string Register(string username, string password, string cpassword)
        {
            try
            {
                if (string.IsNullOrEmpty(username))
                {
                    return "请输入用户名！";
                }

                if (string.IsNullOrEmpty(password))
                {
                    return "请输入密码！";
                }

                if (string.IsNullOrEmpty(cpassword))
                {
                    return "请输入确认密码！";
                }

                if (password.Trim() != cpassword.Trim())
                {
                    return "两次密码输入不一致！";
                }

                SqlConnection sqlConnection = new SqlConnection(connStr);
                sqlConnection.Open();
                string sql = $"SELECT COUNT(*) FROM [user] WHERE username = '{username.Trim()}'";
                DataSet dataSet = new DataSet();
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(sql, sqlConnection);
                sqlDataAdapter.Fill(dataSet);

                if (dataSet.Tables.Count > 0)
                {
                    DataTable dt = dataSet.Tables[0];

                    if (dt.Rows.Count > 0)
                    {
                        int count = dt.Rows[0][0].ToString() == "" ? 0 : (int)dt.Rows[0][0];

                        if (count > 0)
                        {
                            return "用户名已存在！";
                        }
                    }
                }

                SqlConnection sqlConnection1 = new SqlConnection(connStr);
                string sqlAdd = $"INSERT INTO [user] VALUES ('{username}', '{password}')";
                SqlCommand cmd = new SqlCommand(sqlAdd, sqlConnection1);
                sqlConnection1.Open();

                int result = cmd.ExecuteNonQuery();

                if (result > 0)
                {
                    return "注册成功！";
                }
                else
                {
                    return "注册失败！";
                }
            }
            catch (Exception ex)
            {
                return "注册失败！";
            }
        }
    }
}
