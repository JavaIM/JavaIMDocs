---
title: Install Client
---

## Introduction

This page is about installing JavaIM Client.

# 📝 Client Configuration

## Step 1. Install Java

JavaIM requires Java 17. You need to go to Oracle’s official website to download the installation package of JDK 17.

Click [here](https://download.oracle.com/java/17/latest/jdk-17\_windows-x64\_bin.exe) to download the installation package of JDK 17.

## Step 2. Download the default configured JavaIM from Github Action

Access https://github.com/JavaIM/JavaIM/actions/workflows/maven.yml using a browser. Click on the text with an item on the right side with a green check mark. It is recommended to use the top one. Please note that there is a blue box behind it, and please ensure that it is "main". If not, the stability can not be guaranteed.

In the new interface that opens, confirm that the page you open is Summary page. To check it, check the left side of the "Summary" to see if there are any colors. If not, click on the text "Summary".

After opening the Summary, search for "Artifacts" in the new interface. You should be able to find "JavaIM - Please Use It After Unzipping" in the area. Click on it, and your browser should start downloading.

After finishing downloading, unzip and copy the "JavaIM-1.0-SNAPSHOT.jar" to a folder.

## Step 3. Obtain the public key from the server

After obtaining the public key, rename it to "ServerPublicKey.key" and place it in the same folder as the jar file.

## Step 4. Run according to prompts

Please open the terminal in the previous folder (cmd for Windows systems). If you are a Linux user, please enter

```bash
$Java_Home/bin/java.exe -Dfile-encoding=UTF-8 -jar JavaIM-1.0-SNAPSHOT.jar
```

If you are a Windows user, please also enter

```cmd
%Java_Home%\bin\java.exe -Dfile-encoding=UTF-8 -jar JavaIM-1.0-SNAPSHOT.jar
```

After that, follow the prompts to input. If you want to open it again, just perform the third step again.

## Step 5. Complete

After arriving here, you should already be able to start chatting.
