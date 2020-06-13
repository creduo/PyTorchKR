(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{223:function(o,c,t){"use strict";t.r(c);var h=t(224),n=t.n(h);for(var l in h)"default"!==l&&function(o){t.d(c,o,(function(){return h[o]}))}(l);c.default=n.a},224:function(o,c,t){},238:function(o,c,t){"use strict";t.d(c,"a",(function(){return h})),t.d(c,"b",(function(){return n}));var h=function(){var o=this.$createElement;this._self._c;return this._m(0)},n=[function(){var o=this.$createElement;return(this._self._c||o)("div",[this._v('\n    ## Installing previous versions of PyTorch\n\n    We\'d prefer you install the [latest version](https://pytorch.org/get-started/locally),\n    but old binaries and installation instructions are provided below for\n    your convenience.\n\n    ## Commands for Versions >= 1.0.0\n\n    ### v1.2.0\n\n    #### Conda\n\n    ##### OSX\n\n    ```\n    # conda\n    conda install pytorch==1.2.0 torchvision==0.4.0 -c pytorch\n    ```\n\n    #####  Linux and Windows\n\n    ```\n    # CUDA 9.2\n    conda install pytorch==1.2.0 torchvision==0.4.0 cudatoolkit=9.2 -c pytorch\n\n    # CUDA 10.0\n    conda install pytorch==1.2.0 torchvision==0.4.0 cudatoolkit=10.0 -c pytorch\n\n    # CPU Only\n    conda install pytorch==1.2.0 torchvision==0.4.0 cpuonly -c pytorch\n    ```\n\n    #### Wheel\n\n    ##### OSX\n\n    ```\n    pip install torch==1.2.0 torchvision==0.4.0\n    ```\n\n    ##### Linux and Windows\n\n    ```\n    # CUDA 10.0\n    pip install torch===1.2.0 torchvision===0.4.0 -f https://download.pytorch.org/whl/torch_stable.html\n\n    # CUDA 9.2\n    pip install torch==1.2.0+cu92 torchvision==0.4.0+cu92 -f https://download.pytorch.org/whl/torch_stable.html\n\n    # CPU only\n    pip install torch==1.2.0+cpu torchvision==0.4.0+cpu -f https://download.pytorch.org/whl/torch_stable.html\n    ```\n\n    ### v1.1.0\n\n    #### Conda\n\n    ##### OSX\n\n    ```\n    # conda\n    conda install pytorch==1.1.0 torchvision==0.3.0 -c pytorch\n    ```\n\n    #####  Linux and Windows\n\n    ```\n    # CUDA 9.0\n    conda install pytorch==1.1.0 torchvision==0.3.0 cudatoolkit=9.0 -c pytorch\n\n    # CUDA 10.0\n    conda install pytorch==1.1.0 torchvision==0.3.0 cudatoolkit=10.0 -c pytorch\n\n    # CPU Only\n    conda install pytorch-cpu==1.1.0 torchvision-cpu==0.3.0 cpuonly -c pytorch\n    ```\n\n    #### Wheel\n\n    ##### OSX\n\n    ```\n    pip install torch==1.1.0 torchvision==0.3.0\n    ```\n\n    ##### Linux and Windows\n\n    ```\n    # CUDA 10.0\n    Download and install wheel from https://download.pytorch.org/whl/cu100/torch_stable.html\n\n    # CUDA 9.0\n    Download and install wheel from https://download.pytorch.org/whl/cu90/torch_stable.html\n\n    # CPU only\n    Download and install wheel from https://download.pytorch.org/whl/cpu/torch_stable.html\n    ```\n\n    ### v1.0.1\n\n    #### Conda\n\n    ##### OSX\n\n    ```\n    # conda\n    conda install pytorch==1.0.1 torchvision==0.2.2 -c pytorch\n    ```\n\n    #####  Linux and Windows\n\n    ```\n    # CUDA 9.0\n    conda install pytorch==1.0.1 torchvision==0.2.2 cudatoolkit=9.0 -c pytorch\n\n    # CUDA 10.0\n    conda install pytorch==1.0.1 torchvision==0.2.2 cudatoolkit=10.0 -c pytorch\n\n    # CPU Only\n    conda install pytorch-cpu==1.0.1 torchvision-cpu==0.2.2 cpuonly -c pytorch\n    ```\n\n    #### Wheel\n\n    ##### OSX\n\n    ```\n    pip install torch==1.0.1 torchvision==0.2.2\n    ```\n\n    ##### Linux and Windows\n\n    ```\n    # CUDA 10.0\n    Download and install wheel from https://download.pytorch.org/whl/cu100/torch_stable.html\n\n    # CUDA 9.0\n    Download and install wheel from https://download.pytorch.org/whl/cu90/torch_stable.html\n\n    # CPU only\n    Download and install wheel from https://download.pytorch.org/whl/cpu/torch_stable.html\n    ```\n\n    ### v1.0.0\n\n    #### Conda\n\n    ##### OSX\n\n    ```\n    # conda\n    conda install pytorch==1.0.0 torchvision==0.2.1 -c pytorch\n    ```\n\n    #####  Linux and Windows\n\n    ```\n    # CUDA 10.0\n    conda install pytorch==1.0.0 torchvision==0.2.1 cuda100 -c pytorch\n\n    # CUDA 9.0\n    conda install pytorch==1.0.0 torchvision==0.2.1 cuda90 -c pytorch\n\n    # CUDA 8.0\n    conda install pytorch==1.0.0 torchvision==0.2.1 cuda80 -c pytorch\n\n    # CPU Only\n    conda install pytorch-cpu==1.0.0 torchvision-cpu==0.2.1 cpuonly -c pytorch\n    ```\n\n    #### Wheel\n\n    ##### OSX\n\n    ```\n    pip install torch==1.0.0 torchvision==0.2.1\n    ```\n\n    ##### Linux and Windows\n\n    ```\n    # CUDA 10.0\n    Download and install wheel from https://download.pytorch.org/whl/cu100/torch_stable.html\n\n    # CUDA 9.0\n    Download and install wheel from https://download.pytorch.org/whl/cu90/torch_stable.html\n\n    # CUDA 8.0\n    Download and install wheel from https://download.pytorch.org/whl/cu80/torch_stable.html\n\n    # CPU only\n    Download and install wheel from https://download.pytorch.org/whl/cpu/torch_stable.html\n    ```\n\n    ## Commands for Versions < 1.0.0\n\n    ### Via conda\n\n    > This should be used for most previous macOS version installs.\n\n    To install a previous version of PyTorch via Anaconda or Miniconda,\n    replace "0.4.1" in the following commands with the desired version\n    (i.e., "0.2.0").\n\n    Installing with CUDA 9\n\n    `conda install pytorch=0.4.1 cuda90 -c pytorch`\n\n    or\n\n    `conda install pytorch=0.4.1 cuda92 -c pytorch`\n\n    Installing with CUDA 8\n\n    `conda install pytorch=0.4.1 cuda80 -c pytorch`\n\n    Installing with CUDA 7.5\n\n    `conda install pytorch=0.4.1 cuda75 -c pytorch`\n\n    Installing without CUDA\n\n    `conda install pytorch=0.4.1 -c pytorch`\n\n    ### From source\n\n    It is possible to checkout an older version of [PyTorch](https://github.com/pytorch/pytorch)\n    and build it.\n    You can list tags in PyTorch git repository with `git tag` and checkout a\n    particular one (replace \'0.1.9\' with the desired version) with\n\n    `git checkout v0.1.9`\n\n    Follow the install from source instructions in the README.md of the PyTorch\n    checkout.\n\n    ### Via pip\n\n    Download the `whl` file with the desired version from the following html pages:\n\n    - '),this._v("//download.pytorch.org/whl/cpu/torch_stable.html> # CPU-only build\n    - "),this._v("//download.pytorch.org/whl/cu80/torch_stable.html> # CUDA 8.0 build\n    - "),this._v("//download.pytorch.org/whl/cu90/torch_stable.html> # CUDA 9.0 build\n    - "),this._v("//download.pytorch.org/whl/cu92/torch_stable.html> # CUDA 9.2 build\n    - "),this._v("//download.pytorch.org/whl/cu100/torch_stable.html> # CUDA 10.0 build\n\n    Then, install the file with `pip install [downloaded file]`\n\n\n    Note: most pytorch versions are available only for specific CUDA versions. For example pytorch=1.0.1 is not available for CUDA 9.2\n\n    ### (Old) PyTorch Linux binaries compiled with CUDA 7.5\n\n    These predate the html page above and have to be manually installed by downloading the wheel file and `pip install downloaded_file`\n\n    - [cu75/torch-0.3.0.post4-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.3.0.post4-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.3.0.post4-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.3.0.post4-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.3.0.post4-cp27-cp27mu-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.3.0.post4-cp27-cp27mu-linux_x86_64.whl)\n    - [cu75/torch-0.3.0.post4-cp27-cp27m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.3.0.post4-cp27-cp27m-linux_x86_64.whl)\n    - [cu75/torch-0.2.0.post3-cp36-cp36m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post3-cp36-cp36m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post3-cp35-cp35m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post3-cp35-cp35m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post3-cp27-cp27mu-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post3-cp27-cp27mu-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post3-cp27-cp27m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post3-cp27-cp27m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post2-cp36-cp36m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post2-cp36-cp36m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post2-cp35-cp35m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post2-cp35-cp35m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post2-cp27-cp27mu-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post2-cp27-cp27mu-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post2-cp27-cp27m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post2-cp27-cp27m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post1-cp36-cp36m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post1-cp36-cp36m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post1-cp35-cp35m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post1-cp35-cp35m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post1-cp27-cp27mu-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post1-cp27-cp27mu-manylinux1_x86_64.whl)\n    - [cu75/torch-0.2.0.post1-cp27-cp27m-manylinux1_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.2.0.post1-cp27-cp27m-manylinux1_x86_64.whl)\n    - [cu75/torch-0.1.12.post2-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.12.post2-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.12.post2-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.12.post2-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.12.post2-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.12.post2-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.12.post1-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.12.post1-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.12.post1-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.12.post1-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.12.post1-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.12.post1-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.11.post5-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.11.post5-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.11.post5-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.11.post5-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.11.post5-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.11.post5-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.11.post4-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.11.post4-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.11.post4-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.11.post4-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.11.post4-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.11.post4-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.10.post2-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.10.post2-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.10.post2-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.10.post2-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.10.post2-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.10.post2-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.10.post1-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.10.post1-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.10.post1-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.10.post1-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.10.post1-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.10.post1-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.9.post2-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.9.post2-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.9.post2-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.9.post2-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.9.post2-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.9.post2-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.9.post1-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.9.post1-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.9.post1-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.9.post1-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.9.post1-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.9.post1-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.8.post1-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.8.post1-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.8.post1-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.8.post1-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.8.post1-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.8.post1-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.7.post2-cp36-cp36m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.7.post2-cp36-cp36m-linux_x86_64.whl)\n    - [cu75/torch-0.1.7.post2-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.7.post2-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.7.post2-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.7.post2-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.6.post22-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.6.post22-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.6.post22-cp27-none-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.6.post22-cp27-none-linux_x86_64.whl)\n    - [cu75/torch-0.1.6.post20-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.6.post20-cp35-cp35m-linux_x86_64.whl)\n    - [cu75/torch-0.1.6.post20-cp27-cp27mu-linux_x86_64.whl](https://download.pytorch.org/whl/cu75/torch-0.1.6.post20-cp27-cp27mu-linux_x86_64.whl)\n\n    ### Windows binaries\n\n    - [cpu/torch-1.0.0-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cpu/torch-1.0.0-cp35-cp35m-win_amd64.whl)\n    - [cu80/torch-1.0.0-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cu80/torch-1.0.0-cp35-cp35m-win_amd64.whl)\n    - [cu90/torch-1.0.0-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cu90/torch-1.0.0-cp35-cp35m-win_amd64.whl)\n    - [cu100/torch-1.0.0-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cu100/torch-1.0.0-cp35-cp35m-win_amd64.whl)\n    - [cpu/torch-1.0.0-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cpu/torch-1.0.0-cp36-cp36m-win_amd64.whl)\n    - [cu80/torch-1.0.0-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cu80/torch-1.0.0-cp36-cp36m-win_amd64.whl)\n    - [cu90/torch-1.0.0-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cu90/torch-1.0.0-cp36-cp36m-win_amd64.whl)\n    - [cu100/torch-1.0.0-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cu100/torch-1.0.0-cp36-cp36m-win_amd64.whl)\n    - [cpu/torch-1.0.0-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cpu/torch-1.0.0-cp37-cp37m-win_amd64.whl)\n    - [cu80/torch-1.0.0-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cu80/torch-1.0.0-cp37-cp37m-win_amd64.whl)\n    - [cu90/torch-1.0.0-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cu90/torch-1.0.0-cp37-cp37m-win_amd64.whl)\n    - [cu100/torch-1.0.0-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cu100/torch-1.0.0-cp37-cp37m-win_amd64.whl)\n    - [cpu/torch-0.4.1-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cpu/torch-0.4.1-cp35-cp35m-win_amd64.whl)\n    - [cu80/torch-0.4.1-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cu80/torch-0.4.1-cp35-cp35m-win_amd64.whl)\n    - [cu90/torch-0.4.1-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cu90/torch-0.4.1-cp35-cp35m-win_amd64.whl)\n    - [cu92/torch-0.4.1-cp35-cp35m-win_amd64.whl](https://download.pytorch.org/whl/cu92/torch-0.4.1-cp35-cp35m-win_amd64.whl)\n    - [cpu/torch-0.4.1-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cpu/torch-0.4.1-cp36-cp36m-win_amd64.whl)\n    - [cu80/torch-0.4.1-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cu80/torch-0.4.1-cp36-cp36m-win_amd64.whl)\n    - [cu90/torch-0.4.1-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cu90/torch-0.4.1-cp36-cp36m-win_amd64.whl)\n    - [cu92/torch-0.4.1-cp36-cp36m-win_amd64.whl](https://download.pytorch.org/whl/cu92/torch-0.4.1-cp36-cp36m-win_amd64.whl)\n    - [cpu/torch-0.4.1-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cpu/torch-0.4.1-cp37-cp37m-win_amd64.whl)\n    - [cu80/torch-0.4.1-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cu80/torch-0.4.1-cp37-cp37m-win_amd64.whl)\n    - [cu90/torch-0.4.1-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cu90/torch-0.4.1-cp37-cp37m-win_amd64.whl)\n    - [cu92/torch-0.4.1-cp37-cp37m-win_amd64.whl](https://download.pytorch.org/whl/cu92/torch-0.4.1-cp37-cp37m-win_amd64.whl)\n\n    ### Mac and misc. binaries\n\n    For recent macOS binaries, use `conda`:\n\n    e.g.,\n\n    `conda install pytorch=0.4.1 cuda90 -c pytorch`\n    `conda install pytorch=0.4.1 cuda92 -c pytorch`\n    `conda install pytorch=0.4.1 cuda80 -c pytorch`\n    `conda install pytorch=0.4.1 -c pytorch` # No CUDA\n\n    - [torchvision-0.1.6-py3-none-any.whl](https://download.pytorch.org/whl/torchvision-0.1.6-py3-none-any.whl)\n    - [torchvision-0.1.6-py2-none-any.whl](https://download.pytorch.org/whl/torchvision-0.1.6-py2-none-any.whl)\n    - [torch-1.0.0-cp37-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/cpu/torch-1.0.0-cp37-none-macosx_10_7_x86_64.whl)\n    - [torch-1.0.0-cp36-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/cpu/torch-1.0.0-cp36-none-macosx_10_7_x86_64.whl)\n    - [torch-1.0.0-cp35-none-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/cpu/torch-1.0.0-cp35-none-macosx_10_6_x86_64.whl)\n    - [torch-1.0.0-cp27-none-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/cpu/torch-1.0.0-cp27-none-macosx_10_6_x86_64.whl)\n    - [torch-0.4.0-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.4.0-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.4.0-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.4.0-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.4.0-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.4.0-cp27-none-macosx_10_6_x86_64.whl)\n    - [torch-0.3.1-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.3.1-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.3.1-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.3.1-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.3.1-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.3.1-cp27-none-macosx_10_6_x86_64.whl)\n    - [torch-0.3.0.post4-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.3.0.post4-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.3.0.post4-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.3.0.post4-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.3.0.post4-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.3.0.post4-cp27-none-macosx_10_6_x86_64.whl)\n    - [torch-0.2.0.post3-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post3-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post3-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post3-cp35-cp35m-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post3-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post3-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post2-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post2-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post2-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post2-cp35-cp35m-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post2-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post2-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post1-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post1-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post1-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post1-cp35-cp35m-macosx_10_7_x86_64.whl)\n    - [torch-0.2.0.post1-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.2.0.post1-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.12.post2-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.12.post2-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.12.post2-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.12.post2-cp35-cp35m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.12.post2-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.12.post2-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.12.post1-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.12.post1-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.12.post1-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.12.post1-cp35-cp35m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.12.post1-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.12.post1-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.11.post5-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.11.post5-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.11.post5-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.11.post5-cp35-cp35m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.11.post5-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.11.post5-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.11.post4-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.11.post4-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.11.post4-cp35-cp35m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.11.post4-cp35-cp35m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.11.post4-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.11.post4-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.10.post1-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.10.post1-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.10.post1-cp35-cp35m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.10.post1-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.1.10.post1-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.10.post1-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.9.post2-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.9.post2-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.9.post2-cp35-cp35m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.9.post2-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.1.9.post2-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.9.post2-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.9.post1-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.9.post1-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.9.post1-cp35-cp35m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.9.post1-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.1.9.post1-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.9.post1-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.8.post1-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.8.post1-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.8.post1-cp35-cp35m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.8.post1-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.1.8.post1-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.8.post1-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.7.post2-cp36-cp36m-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.7.post2-cp36-cp36m-macosx_10_7_x86_64.whl)\n    - [torch-0.1.7.post2-cp35-cp35m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.7.post2-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.1.7.post2-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.7.post2-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.6.post22-cp35-cp35m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.6.post22-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.1.6.post22-cp27-none-macosx_10_7_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.6.post22-cp27-none-macosx_10_7_x86_64.whl)\n    - [torch-0.1.6.post20-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.6.post20-cp35-cp35m-linux_x86_64.whl)\n    - [torch-0.1.6.post20-cp27-cp27mu-linux_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.6.post20-cp27-cp27mu-linux_x86_64.whl)\n    - [torch-0.1.6.post17-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.6.post17-cp35-cp35m-linux_x86_64.whl)\n    - [torch-0.1.6.post17-cp27-cp27mu-linux_x86_64.whl](https://download.pytorch.org/whl/torch-0.1.6.post17-cp27-cp27mu-linux_x86_64.whl)\n    - [torch-0.1-cp35-cp35m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1-cp35-cp35m-macosx_10_6_x86_64.whl)\n    - [torch-0.1-cp27-cp27m-macosx_10_6_x86_64.whl](https://download.pytorch.org/whl/torch-0.1-cp27-cp27m-macosx_10_6_x86_64.whl)\n    - [torch_cuda80-0.1.6.post20-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/torch_cuda80-0.1.6.post20-cp35-cp35m-linux_x86_64.whl)\n    - [torch_cuda80-0.1.6.post20-cp27-cp27mu-linux_x86_64.whl](https://download.pytorch.org/whl/torch_cuda80-0.1.6.post20-cp27-cp27mu-linux_x86_64.whl)\n    - [torch_cuda80-0.1.6.post17-cp35-cp35m-linux_x86_64.whl](https://download.pytorch.org/whl/torch_cuda80-0.1.6.post17-cp35-cp35m-linux_x86_64.whl)\n    - [torch_cuda80-0.1.6.post17-cp27-cp27mu-linux_x86_64.whl](https://download.pytorch.org/whl/torch_cuda80-0.1.6.post17-cp27-cp27mu-linux_x86_64.whl)\n\n")])}]},242:function(o,c,t){"use strict";t.r(c);var h=t(238),n=t(223);for(var l in n)"default"!==l&&function(o){t.d(c,o,(function(){return n[o]}))}(l);var r=t(20),component=Object(r.a)(n.default,h.a,h.b,!1,null,null,null);c.default=component.exports}}]);