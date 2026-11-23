"""Make a QR-code SVG for the poster, e.g. once the arXiv ID exists:

    pip install qrcode
    python3 build/make_qr.py https://arxiv.org/abs/XXXX.XXXXX figures/qr-arxiv.svg
"""
import sys, qrcode
from qrcode.image.svg import SvgPathImage
url, out = sys.argv[1], sys.argv[2]
q = qrcode.QRCode(border=0, error_correction=qrcode.constants.ERROR_CORRECT_M)
q.add_data(url); q.make()
q.make_image(image_factory=SvgPathImage).save(out)
print("wrote", out)
