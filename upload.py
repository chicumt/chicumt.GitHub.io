import subprocess
from datetime import datetime, timedelta
import pytz


def git_operations():
    # 设置工作目录
    work_dir = "G:\\vue-press\\blog"

    # 设置北京时区
    tz_beijing = pytz.timezone('Asia/Shanghai')

    # 获取当前的北京时间
    dt_beijing = datetime.now(tz_beijing)
    date_str = dt_beijing.strftime('%Y-%m-%d %H:%M:%S')
    commit_message = f"现在北京时间{date_str}"

    

    # 执行git命令
    subprocess.run(["git", "add", "."], cwd=work_dir)
    subprocess.run(["git", "commit", "-m", commit_message], cwd=work_dir)
    subprocess.run(["git", "push", "app", "master:master"], cwd=work_dir)


if __name__ == "__main__":
    git_operations()
