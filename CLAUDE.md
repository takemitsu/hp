# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

個人用のWebツール集。Bootstrap 5.3を使用したシンプルな静的HTMLサイト。

## アーキテクチャ

- **静的HTMLサイト**: サーバーサイドフレームワークなし
- **スタイリング**: Bootstrap 5.3 CDN、JetBrains Monoフォント（Google Fonts）
- **JavaScript**: jQuery 3.7.1（一部ページ）、Vanilla JS
- **テーマ切り替え**: `setTheme.js` / `setTheme.mini.js`でダーク/ライトモード対応

## ファイル構成

- `index.html`: メインページ（ツール一覧）
- 各種ツールページ:
  - `fontcheck.html`: フォントサイズチェッカー
  - `json.html`: JSON整形ツール
  - `hex.html`: 10進数⇔16進数変換、RGB色変換
  - `unixtime.html`: Unixタイムスタンプ変換
  - `urlencode.html`: URLエンコード/デコード
  - `linePointer.html`: SVGアニメーションテスト

## 開発時の注意点

- CDNからBootstrapとjQueryを読み込んでいるため、ビルドプロセスは不要
- 各ツールページは独立して動作
- テーマ切り替え機能は`data-bs-theme`属性とlocalStorageを使用
- 新しいツールページを追加する場合は、既存のページ構造（navbar、テーマ切り替え）を踏襲すること
- 全ページでJetBrains Monoフォントを使用（Google Fonts経由）

## デプロイ

Sakura VPSのnginxでホスティング。手動でgit pullしてデプロイ。

```bash
git pull
sudo rsync -av --exclude='.git*' --exclude='*.md' . /var/www/html/
```