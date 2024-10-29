# 文字列表示
#---------------------------------

import tkinter
root = tkinter.Tk()
root.title("demo_Tkinter")
root.geometry("400x400")

# ラベルの作成
label = tkinter.Label(root, text="This is the Label.")

#ラベルの表示
label.grid()

root.mainloop()