<!DOCTYPE html>
<html lang="ja">

<head>
    <!-- Standard Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.css">
    <!-- Site Properties -->
    <style type="text/css">
        body {
            background-color: #DADADA;
        }

        body>.grid {
            height: 100%;
        }

        .image {
            margin-top: -100px;
        }

        .column {
            max-width: 400px;
        }
    </style>
</head>

<body class="antialiased" id="my-background">
    <div class="ui middle aligned center aligned grid">
        <div class="column" >
            <h2 class="ui primary image header">
                <div class="content">
                    ログイン
                </div>
            </h2>
            <form class="ui large form">
                <div class="ui stacked segment">
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="user icon"></i>
                            <input type="text" name="emp_code" placeholder="社員番号">
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="lock icon"></i>
                            <input type="password" name="password" placeholder="パスワード">
                        </div>
                    </div>
                    <div class="ui inverted fluid large primary submit button">ログイン</div>
                </div>

                <div class="ui error message"></div>

            </form>

            <div class="ui message">
                ログインできない場合は運営までご連絡ください。
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.8/dist/semantic.min.js"></script>

    <!-- three.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>

    <!-- vanta.jsのテーマbirdsの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.birds.min.js"></script>
    <!-- vanta.jsのテーマfogの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.fog.min.js"></script>
    <!-- vanta.jsのテーマwavesの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.waves.min.js"></script>
    <!-- vanta.jsのテーマcloudsの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.clouds.min.js"></script>
    <!-- vanta.jsのテーマclouds2の場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.clouds2.min.js"></script>
    <!-- vanta.jsのテーマglobeの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.globe.min.js"></script>
    <!-- vanta.jsのテーマnetの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js"></script>
    <!-- vanta.jsのテーマcellsの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.cells.min.js"></script>
    <!-- vanta.jsのテーマtrunkの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.trunk.min.js"></script>
    <!-- vanta.jsのテーマtopologyの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.topology.min.js"></script>
    <!-- vanta.jsのテーマdotsの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.dots.min.js"></script>
    <!-- vanta.jsのテーマringsの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.rings.min.js"></script>
    <!-- vanta.jsのテーマhaloの場合 -->
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.halo.min.js"></script>
<script>

VANTA.BIRDS({
  el: "#my-background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00
})

</script>
</body>

</html>