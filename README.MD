二进制、十六进制、十进制混合计算的小工具

帮助

```
$icalc -h
Usage: icalc [options] <expr>

Example: icalc -m -x -b '0x9*(8+0b100)'

Options:
  -V, --version  output the version number
  -b,--binary    convert result to binary format
  -x,--hex       convert result to hex format
  -m,--byte      convert result to byte format
  -h, --help     output usage information
```

示例

```
$icalc -m -x -b '0x9*(8+0b100)'
0x9*(8+0b100)=108=0b1101100=0x6c≈108.0B
```