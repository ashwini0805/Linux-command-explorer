const commands = {

file:[
{name:"ls",desc:"List directory contents",example:"ls -la"},
{name:"cd",desc:"Change directory",example:"cd /home/user"},
{name:"pwd",desc:"Show current directory",example:"pwd"},
{name:"cp",desc:"Copy files",example:"cp file1.txt backup/"},
{name:"mv",desc:"Move or rename file",example:"mv file1.txt newfile.txt"},
{name:"rm",desc:"Delete files",example:"rm file1.txt"},
{name:"mkdir",desc:"Create directory",example:"mkdir newfolder"},
{name:"touch",desc:"Create empty file",example:"touch file.txt"}
],

network:[
{name:"ping",desc:"Check network connectivity",example:"ping google.com"},
{name:"ifconfig",desc:"Show network interfaces",example:"ifconfig"},
{name:"ip",desc:"Manage network interfaces",example:"ip a"},
{name:"netstat",desc:"Show network connections",example:"netstat -tulnp"},
{name:"ssh",desc:"Remote login",example:"ssh user@192.168.1.10"},
{name:"scp",desc:"Secure copy file",example:"scp file.txt user@host:/home"},
{name:"wget",desc:"Download files",example:"wget https://example.com/file.zip"},
{name:"curl",desc:"Transfer data from server",example:"curl https://api.github.com"}
],

security:[
{name:"chmod",desc:"Change file permissions",example:"chmod 755 script.sh"},
{name:"chown",desc:"Change file owner",example:"chown user:user file.txt"},
{name:"passwd",desc:"Change user password",example:"passwd username"},
{name:"sudo",desc:"Run command as root",example:"sudo apt update"},
{name:"whoami",desc:"Show current user",example:"whoami"}
],

user:[
{name:"useradd",desc:"Create new user",example:"sudo useradd john"},
{name:"usermod",desc:"Modify user account",example:"sudo usermod -aG sudo john"},
{name:"userdel",desc:"Delete user",example:"sudo userdel john"},
{name:"groups",desc:"Show user groups",example:"groups username"},
{name:"id",desc:"Show user ID info",example:"id username"}
],

disk:[
{name:"df",desc:"Show disk space",example:"df -h"},
{name:"du",desc:"Check directory size",example:"du -sh folder"},
{name:"mount",desc:"Mount file system",example:"mount /dev/sdb1 /mnt"},
{name:"umount",desc:"Unmount file system",example:"umount /mnt"},
{name:"lsblk",desc:"List block devices",example:"lsblk"}
],

compression:[
{name:"tar",desc:"Create and extract archive files"},
{name:"gzip",desc:"Compress files"},
{name:"gunzip",desc:"Decompress gzip files"},
{name:"zip",desc:"Create zip archive"},
{name:"unzip",desc:"Extract zip archive"},
{name:"bzip2",desc:"Compress files using bzip2"},
{name:"bunzip2",desc:"Decompress bzip2 files"},
{name:"compress",desc:"Compress files"},
{name:"uncompress",desc:"Uncompress files"},
{name:"cpio",desc:"Archive files"},
{name:"ar",desc:"Create static libraries"},
{name:"rar",desc:"Create rar archives"},
{name:"unrar",desc:"Extract rar archives"},
{name:"zcat",desc:"View compressed files"},
{name:"zless",desc:"View compressed text"},
{name:"zdiff",desc:"Compare compressed files"},
{name:"zgrep",desc:"Search inside compressed files"},
{name:"zipinfo",desc:"View zip file info"},
{name:"bzcat",desc:"View bzip files"},
{name:"bzgrep",desc:"Search inside bz2 files"}
],

process:[
{name:"kill",desc:"Terminate a process"},
{name:"pkill",desc:"Kill process by name"},
{name:"killall",desc:"Kill all processes by name"},
{name:"nice",desc:"Start process with priority"},
{name:"renice",desc:"Change process priority"},
{name:"jobs",desc:"Show background jobs"},
{name:"fg",desc:"Bring process to foreground"},
{name:"bg",desc:"Resume process in background"},
{name:"pgrep",desc:"Search processes"},
{name:"nohup",desc:"Run process after logout"},
{name:"disown",desc:"Detach process from shell"},
{name:"screen",desc:"Manage terminal sessions"},
{name:"tmux",desc:"Advanced terminal multiplexer"},
{name:"strace",desc:"Trace system calls"},
{name:"ltrace",desc:"Trace library calls"},
{name:"at",desc:"Schedule task"},
{name:"batch",desc:"Execute batch jobs"},
{name:"atq",desc:"Show scheduled jobs"},
{name:"atrm",desc:"Remove scheduled job"},
{name:"setsid",desc:"Run program in new session"}
],

config:[
{name:"crontab",desc:"Schedule recurring tasks"},
{name:"systemctl",desc:"Control system services"},
{name:"service",desc:"Manage services"},
{name:"chkconfig",desc:"Manage service startup"},
{name:"timedatectl",desc:"Manage system time"},
{name:"locale",desc:"Show language settings"},
{name:"localectl",desc:"Manage locale"},
{name:"ulimit",desc:"Control resource limits"},
{name:"alias",desc:"Create command shortcuts"},
{name:"unalias",desc:"Remove alias"},
{name:"export",desc:"Set environment variable"},
{name:"set",desc:"Shell variable settings"},
{name:"unset",desc:"Remove variable"},
{name:"env",desc:"Display environment"},
{name:"sysctl",desc:"Modify kernel parameters"},
{name:"modprobe",desc:"Load kernel module"},
{name:"lsmod",desc:"List modules"},
{name:"insmod",desc:"Insert module"},
{name:"rmmod",desc:"Remove module"},
{name:"depmod",desc:"Module dependency manager"}
],

package:[
{name:"rpm",desc:"Manage RPM packages"},
{name:"apt-get",desc:"Install packages"},
{name:"dpkg",desc:"Debian package manager"},
{name:"yum",desc:"Package manager for RHEL"},
{name:"apt",desc:"Advanced package manager"},
{name:"aptitude",desc:"Interactive package manager"},
{name:"pacman",desc:"Arch Linux package manager"},
{name:"zypper",desc:"SUSE package manager"},
{name:"emerge",desc:"Gentoo package manager"},
{name:"dnf",desc:"Fedora package manager"},
{name:"snap",desc:"Snap package manager"},
{name:"flatpak",desc:"Flatpak package manager"}
],

programming:[
{name:"bash",desc:"Bash shell"},
{name:"sh",desc:"Shell interpreter"},
{name:"perl",desc:"Perl scripting"},
{name:"python",desc:"Python programming"},
{name:"gcc",desc:"C compiler"},
{name:"g++",desc:"C++ compiler"},
{name:"make",desc:"Build automation"},
{name:"cmake",desc:"Build configuration"},
{name:"automake",desc:"Generate Makefiles"},
{name:"autoconf",desc:"Configure build"},
{name:"gdb",desc:"Debugger"},
{name:"ldd",desc:"Show library dependencies"},
{name:"objdump",desc:"Display object file info"},
{name:"nm",desc:"List symbols"},
{name:"readelf",desc:"Analyze ELF files"},
{name:"strings",desc:"Extract strings"},
{name:"git",desc:"Version control system"},
{name:"svn",desc:"Subversion version control"},
{name:"cvs",desc:"Concurrent version system"},
{name:"expect",desc:"Automate terminal interactions"}
]

};